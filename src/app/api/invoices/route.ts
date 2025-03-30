import { NextResponse } from "next/server";
import { z } from "zod";
import { v4 as uuidv4 } from "uuid";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const createInvoiceRequestBodySchema = z.object({
	name: z.string(),
	dueDate: z.string(),
	value: z.number().positive(),
	installments: z.number().int().positive(),
	status: z.enum(["paid", "overdue", "draft", "pending"]),
	type: z.enum(["fixed", "recurring"]),
});

const response = {
	status(code: number) {
		return {
			json: (data: unknown) => NextResponse.json(data, { status: code }),
		};
	},
};

export async function POST(req: Request) {
	const body = await req.json();

	const invoiceData = createInvoiceRequestBodySchema.parse(body);

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
			value: invoiceData.value,
			installments: invoiceData.installments,
			status: invoiceData.status,
			type: invoiceData.type,
			user_id: userInfo.id,
			createdAt: new Date(),
		},
	});

	return response.status(201).json({
		success: true,
		error: null,
		data: {
			id: invoice.id,
			name: invoice.name,
			createdAt: invoice.createdAt.toISOString(),
			dueDate: invoice.dueDate.toISOString(),
			value: invoice.value,
			installments: invoice.installments,
			status: invoice.status,
			type: invoice.type,
		},
	});
}
