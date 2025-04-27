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

export async function GET(request: Request) {
	try {
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
		const { searchParams } = new URL(request.url);
		const startDate = searchParams.get("startDate");
		const endDate = searchParams.get("endDate");

		const where: any = {
			userId: userInfo.id,
		};

		if (startDate) {
			where.createdAt = {
				...where.createdAt,
				gte: new Date(startDate),
			};
		}

		if (endDate) {
			where.createdAt = {
				...where.createdAt,
				lte: new Date(endDate),
			};
		}

		const transactions = await prisma.transaction.findMany({
			where,
			orderBy: {
				createdAt: "desc",
			},
		});

		return response.status(200).json({
			success: true,
			error: null,
			data: transactions,
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
