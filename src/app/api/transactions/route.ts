import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { createTransactionSchema } from "@/@types/transaction";
import { z } from "zod";

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
		const transactionData = createTransactionSchema.parse(body);

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

		const transaction = await prisma.transaction.create({
			data: {
				name: transactionData.name,
				value: transactionData.value,
				category: transactionData.category,
				installment: transactionData.installment,
				type: transactionData.type,
				userId: userInfo.id,
				createdAt: transactionData.createdAt,
			},
		});

		return response.status(201).json({
			success: true,
			error: null,
			data: transaction,
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
