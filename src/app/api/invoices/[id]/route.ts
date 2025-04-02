import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { z } from "zod";

const updateStatusSchema = z.object({
	status: z.enum(["paid", "overdue", "draft", "pending"]),
});

const response = {
	status(code: number) {
		return {
			json: (data: unknown) => NextResponse.json(data, { status: code }),
		};
	},
};

export async function PATCH(
	request: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	try {
		const { id } = await params;
		const body = await request.json();

		const { status } = updateStatusSchema.parse(body);

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
		const updatedInvoice = await prisma.invoice.update({
			where: { id },
			data: {
				status,
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
