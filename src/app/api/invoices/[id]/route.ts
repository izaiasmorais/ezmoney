import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { z } from "zod";

const response = {
	status(code: number) {
		return {
			json: (data: unknown) => NextResponse.json(data, { status: code }),
		};
	},
};

const updateInvoiceStatusSchema = z.object({
	status: z.enum(["paid", "overdue", "draft", "pending"]),
});

export async function PATCH(
	req: Request,
	{ params }: { params: { id: string } }
) {
	try {
		const invoiceId = params.id;
		const body = await req.json();

		const { status } = updateInvoiceStatusSchema.parse(body);

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

		const existingInvoice = await prisma.invoice.findFirst({
			where: {
				id: invoiceId,
				userId: userInfo.id,
			},
		});

		if (!existingInvoice) {
			return response.status(404).json({
				success: false,
				error: "Invoice not found or doesn't belong to user",
				data: null,
			});
		}

		// Update the invoice status
		const updatedInvoice = await prisma.invoice.update({
			where: {
				id: invoiceId,
			},
			data: {
				status,
				updatedAt: new Date(),
			},
		});

		return response.status(200).json({
			success: true,
			error: null,
			data: updatedInvoice,
		});
	} catch (error) {
		if (error instanceof z.ZodError) {
			return response.status(400).json({
				success: false,
				error: error.errors[0].message,
				data: null,
			});
		}

		if (error instanceof Error) {
			return response.status(500).json({
				success: false,
				error: error.message,
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
