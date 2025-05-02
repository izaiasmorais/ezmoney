import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { z } from "zod";

const updateInvoiceSchema = z.object({
	name: z.string().optional(),
	description: z.string().optional(),
	dueDate: z.string().optional(),
	unitValue: z.number().optional(),
	installments: z.number().optional(),
	status: z.enum(["paid", "overdue", "draft", "pending"]).optional(),
	paymentType: z.enum(["unique", "recurring", "fixed"]).optional(),
	category: z
		.enum(["subscription", "loan", "purchase", "general", "streaming"])
		.optional(),
});

const response = {
	status(code: number) {
		return {
			json: (data: unknown) => NextResponse.json(data, { status: code }),
		};
	},
};

export async function PUT(
	request: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	try {
		const { id } = await params;
		const body = await request.json();

		const updateData = updateInvoiceSchema.parse(body);

		const session = await auth.api.getSession({
			headers: await headers(),
		});

		if (!session) {
			return response.status(401).json({
				success: false,
				error: "Sem autorização",
				data: null,
			});
		}

		const userInfo = session.user;

		const existingInvoice = await prisma.invoice.findUnique({
			where: {
				id,
				userId: userInfo.id,
			},
		});

		if (!existingInvoice) {
			return response.status(404).json({
				success: false,
				error: "A conta não foi encontrada",
				data: null,
			});
		}

		if (updateData.status) {
			if (updateData.status === "paid" && existingInvoice.status !== "paid") {
				await prisma.transaction.create({
					data: {
						name: existingInvoice.name,
						value: existingInvoice.unitValue,
						category: existingInvoice.category,
						installment: 1,
						type: "expense",
						userId: userInfo.id,
						invoiceId: id,
					},
				});
			} else if (
				updateData.status !== "paid" &&
				existingInvoice.status === "paid"
			) {
				await prisma.transaction.deleteMany({
					where: {
						invoiceId: id,
					},
				});
			}
		}

		const updatedInvoice = await prisma.invoice.update({
			where: { id },
			data: {
				...updateData,
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

export async function DELETE(
	_request: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	try {
		const { id } = await params;

		const session = await auth.api.getSession({
			headers: await headers(),
		});

		if (!session) {
			return response.status(401).json({
				success: false,
				error: "Sem autorização",
				data: null,
			});
		}

		const userInfo = session.user;

		const existingInvoice = await prisma.invoice.findUnique({
			where: {
				id,
				userId: userInfo.id,
			},
		});

		if (!existingInvoice) {
			return response.status(404).json({
				success: false,
				error: "A conta não foi encontrada",
				data: null,
			});
		}

		await prisma.invoice.delete({
			where: { id },
		});

		return response.status(200).json({
			success: true,
			error: null,
			data: { id, deleted: true },
		});
	} catch (error) {
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
