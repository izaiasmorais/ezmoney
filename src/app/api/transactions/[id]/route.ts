import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { updateTransactionSchema } from "@/@types/transaction";
import { z } from "zod";

const response = {
	status(code: number) {
		return {
			json: (data: unknown) => NextResponse.json(data, { status: code }),
		};
	},
};

export async function PUT(
	req: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	try {
		const body = await req.json();
		const transactionData = updateTransactionSchema.parse(body);
		const transactionId = (await params).id;

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

		// Check if transaction exists and belongs to user
		const existingTransaction = await prisma.transaction.findUnique({
			where: {
				id: transactionId,
				userId: userInfo.id,
			},
		});

		if (!existingTransaction) {
			return response.status(404).json({
				success: false,
				error: "Transação não encontrada",
				data: null,
			});
		}

		const updatedTransaction = await prisma.transaction.update({
			where: {
				id: transactionId,
			},
			data: {
				...transactionData,
			},
		});

		return response.status(200).json({
			success: true,
			error: null,
			data: updatedTransaction,
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
		const transactionId = (await params).id;

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

		// Check if transaction exists and belongs to user
		const existingTransaction = await prisma.transaction.findUnique({
			where: {
				id: transactionId,
				userId: userInfo.id,
			},
		});

		if (!existingTransaction) {
			return response.status(404).json({
				success: false,
				error: "Transação não encontrada",
				data: null,
			});
		}

		await prisma.transaction.delete({
			where: {
				id: transactionId,
			},
		});

		return response.status(200).json({
			success: true,
			error: null,
			data: null,
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
