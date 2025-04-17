import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const response = {
	status(code: number) {
		return {
			json: (data: unknown) => NextResponse.json(data, { status: code }),
		};
	},
};

export async function GET(
	req: Request,
	{ params }: { params: { id: string } }
) {
	try {
		const transactionId = params.id;

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

		const transaction = await prisma.transaction.findUnique({
			where: {
				id: transactionId,
				userId: userInfo.id,
			},
		});

		if (!transaction) {
			return response.status(404).json({
				success: false,
				error: "Transação não encontrada",
				data: null,
			});
		}

		return response.status(200).json({
			success: true,
			error: null,
			data: transaction,
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
