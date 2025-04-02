import { HTTPSuccessResponse, HTTPErrorResponse } from "@/@types/http";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { Invoice, UpdateInvoiceStatusRequest } from "@/@types/invoice";

type UpdateInvoiceStatusResponse =
	| HTTPSuccessResponse<Invoice>
	| HTTPErrorResponse;

/**
 * Updates the status of an existing invoice
 * @param invoiceId The ID of the invoice to update
 * @param status The new status to set
 * @returns Promise with the updated invoice or error
 */
export async function updateInvoiceStatus({
	invoiceId,
	status,
}: UpdateInvoiceStatusRequest): Promise<UpdateInvoiceStatusResponse> {
	try {
		const response = await api.patch<HTTPSuccessResponse<Invoice>>(
			`/api/invoices/${invoiceId}`,
			{ status }
		);

		return response.data;
	} catch (error) {
		if (error instanceof AxiosError && error.response?.data) {
			return error.response.data;
		}

		return {
			success: false,
			error: "Erro desconhecido",
			data: null,
		};
	}
}
