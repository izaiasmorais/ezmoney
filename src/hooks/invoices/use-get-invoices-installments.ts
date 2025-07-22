import { useQuery } from "@tanstack/react-query";
import { z } from "zod";
import type { HTTPErrorResponse, HTTPSuccessResponse } from "@/@types/http";
import { api } from "@/lib/axios";

export const installmentSchema = z.object({
	id: z.string().uuid(),
	unitValue: z.number(),
	dueDate: z.string(),
	status: z.enum(["PENDING", "PAID", "OVERDUE", "DRAFT"]),
});

export type Installment = z.infer<typeof installmentSchema>;

type GetInvoiceInstallmentsResponse =
	| HTTPSuccessResponse<{
			installments: Installment[];
	  }>
	| HTTPErrorResponse;

export async function getInvoiceInstallments(
	invoiceId: string
): Promise<GetInvoiceInstallmentsResponse> {
	const response = await api.get<GetInvoiceInstallmentsResponse>(
		`/invoices/${invoiceId}/installments`
	);

	if (response.data.success) {
		return response.data;
	}

	return {
		success: false,
		errors: response.data.errors,
		data: null,
	};
}

export function useGetInvoiceInstallments(invoiceId: string) {
	const { data, isLoading: isLoadingGetInvoiceInstallments } = useQuery({
		queryKey: ["get-invoice-installments", invoiceId],
		queryFn: () => getInvoiceInstallments(invoiceId),
		enabled: !!invoiceId,
	});

	return {
		installments: data?.data?.installments ?? [],
		isLoadingGetInvoiceInstallments,
	};
}
