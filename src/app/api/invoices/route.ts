import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { createInvoiceRequestSchema } from "@/@types/invoice";
import { ZodError } from "zod";

const response = {
	status(code: number) {
		return {
			json: (data: unknown) => NextResponse.json(data, { status: code }),
		};
	},
};

export async function POST(req: Request) {
	try {
		const body = await req.json();

		const invoiceData = createInvoiceRequestSchema.parse(body);

		const session = await auth.api.getSession({
			headers: await headers(),
		});

		if (!session) {
			return response.status(401).json({
				success: false,
				error: "Unauthorized",
				data: null,
			});
		}

		const userInfo = session?.user;

		const invoice = await prisma.invoice.create({
			data: {
				id: uuidv4(),
				name: invoiceData.name,
				dueDate: new Date(invoiceData.dueDate),
				createdAt: new Date(),
				unitValue: invoiceData.unitValue,
				installments: invoiceData.installments,
				status: invoiceData.status,
				paymentType: invoiceData.paymentType,
				userId: userInfo.id,
				category: invoiceData.category,
				updatedAt: null,
				description: invoiceData.description,
			},
		});

		return response.status(201).json({
			success: true,
			error: null,
			data: invoice,
		});
	} catch (error) {
		if (error instanceof ZodError) {
			return response.status(500).json({
				success: false,
				error: error.errors[0].message,
				data: null,
			});
		}

		if (error instanceof Error) {
			return response.status(500).json({
				success: false,
				error: error,
				data: null,
			});
		}

		return response.status(500).json({
			success: false,
			error: "Internal server error",
			data: null,
		});
	}
}
