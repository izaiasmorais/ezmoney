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

	const invoices = await prisma.invoice.findMany({
		where: {
			userId: userInfo.id,
		},
		orderBy: {
			createdAt: "desc",
		},
	});

	return response.status(200).json({
		success: true,
		error: null,
		data: invoices,
	});
}
