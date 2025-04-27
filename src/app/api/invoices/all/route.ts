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
		where.dueDate = {
			...where.dueDate,
			gte: new Date(startDate),
		};
	}

	if (endDate) {
		where.dueDate = {
			...where.dueDate,
			lte: new Date(endDate),
		};
	}

	const invoices = await prisma.invoice.findMany({
		where,
		orderBy: {
			dueDate: "desc",
		},
	});

	return response.status(200).json({
		success: true,
		error: null,
		data: invoices,
	});
}
