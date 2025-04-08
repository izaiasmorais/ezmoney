import { HTTPSuccessResponse, HTTPErrorResponse } from "@/@types/http";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { Invoice } from "@/@types/invoice";

export type UpdateInvoiceRequest = {
	invoiceId: string;
	data: Partial<Omit<Invoice, "createdAt">>; // All fields are optional, exclude createdAt
};

export type UpdateInvoiceResponse =
	| HTTPSuccessResponse<Invoice>
	| HTTPErrorResponse;

/**
 * Updates any properties of an existing invoice
 * @param invoiceId The ID of the invoice to update
 * @param data The invoice properties to update
 * @returns Promise with the updated invoice or error
 */
export async function updateInvoice({
	invoiceId,
	data,
}: UpdateInvoiceRequest): Promise<UpdateInvoiceResponse> {
	try {
		const response = await api.put<HTTPSuccessResponse<Invoice>>(
			`/api/invoices/${invoiceId}`,
			data
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
