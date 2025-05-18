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

	const { searchParams } = new URL(request.url);
	const userInfo = session.user;

	const startDate = searchParams.get("startDate");
	const endDate = searchParams.get("endDate");

	const now = new Date();
	const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
	firstDayOfMonth.setHours(0, 0, 0, 0);

	const lastDayOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
	lastDayOfMonth.setHours(23, 59, 59, 999);

	const invoices = await prisma.invoice.findMany({
		where: {
			userId: userInfo.id,
			dueDate: {
				gte: startDate ? new Date(startDate) : firstDayOfMonth,
				lte: endDate ? new Date(endDate) : lastDayOfMonth,
			},
		},
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
