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

export async function GET() {
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

		const transactions = await prisma.transaction.findMany({
			where: {
				userId: userInfo.id,
			},
			orderBy: {
				createdAt: "desc",
			},
		});

		if (!transactions.length) {
			return response.status(404).json({
				success: false,
				error: "Nenhuma transação encontrada",
				data: null,
			});
		}

		const csvHeaders = Object.keys(transactions[0]).join(",");

		const rows = transactions.map((transaction) =>
			Object.values(transaction)
				.map((value) => {
					if (value === null || value === undefined) return "";
					if (typeof value === "string")
						return `"${value.replace(/"/g, '""')}"`;
					if (value instanceof Date) return `"${value.toISOString()}"`;
					return value;
				})
				.join(",")
		);

		const csv = [csvHeaders, ...rows].join("\n");

		return new NextResponse(csv, {
			status: 200,
			headers: {
				"Content-Type": "text/csv",
				"Content-Disposition": `attachment; filename=transactions_${
					new Date().toISOString().split("T")[0]
				}.csv`,
			},
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
