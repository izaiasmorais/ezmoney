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
			user_id: userInfo.id,
		},
		orderBy: {
			createdAt: "desc",
		},
	});

	const formattedInvoices = invoices.map((invoice) => ({
		id: invoice.id,
		name: invoice.name,
		createdAt: invoice.createdAt.toISOString(),
		dueDate: invoice.dueDate.toISOString(),
		value: invoice.value,
		installments: invoice.installments,
		status: invoice.status,
		type: invoice.type,
	}));

	return response.status(200).json({
		success: true,
		error: null,
		data: formattedInvoices,
	});
}
