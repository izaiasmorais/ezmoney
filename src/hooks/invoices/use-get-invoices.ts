import { useQuery } from "@tanstack/react-query";
import { z } from "zod";
import type { HTTPErrorResponse, HTTPSuccessResponse } from "@/@types/http";
import { api } from "@/lib/axios";

export const invoiceSchema = z.object({
	id: z.string().uuid(),
	name: z.string(),
	unitValue: z.number(),
	totalInstallments: z.number(),
	dueDate: z.string(),
	category: z.object({
		label: z.string(),
		color: z.string(),
	}),
	status: z.enum(["PENDING", "PAID", "OVERDUE", "DRAFT"]),
});

export type Invoice = z.infer<typeof invoiceSchema>;

type GetInvoicesResponse = HTTPSuccessResponse<Invoice[]> | HTTPErrorResponse;

export async function getInvoices(): Promise<GetInvoicesResponse> {
	const response = await api.get<GetInvoicesResponse>("/invoices");

	if (response.data.success) {
		return response.data;
	}

	return {
		success: false,
		errors: response.data.errors,
		data: null,
	};
}

export function useGetInvoices() {
	const { data, isLoading: isLoadingGetInvoices } = useQuery({
		queryKey: ["get-invoices"],
		queryFn: getInvoices,
	});

	return {
		invoices: data?.data ?? [],
		isLoadingGetInvoices,
	};
}
