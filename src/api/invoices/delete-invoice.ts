import { HTTPSuccessResponse, HTTPErrorResponse } from "@/@types/http";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";

type DeleteInvoiceResponse = HTTPSuccessResponse<null> | HTTPErrorResponse;

/**
 * Deletes an existing invoice by its ID
 * @param invoiceId The ID of the invoice to delete
 * @returns Promise with the response indicating success or error
 */
export async function deleteInvoice(
	invoiceId: string
): Promise<DeleteInvoiceResponse> {
	try {
		const response = await api.delete<HTTPSuccessResponse<null>>(
			`/api/invoices/${invoiceId}`
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
