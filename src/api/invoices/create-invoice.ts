import { HTTPSuccessResponse, HTTPErrorResponse } from "@/@types/http";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { CreateInvoiceRequest, Invoice } from "@/@types/invoice";

type CreateInvoiceResponse = HTTPSuccessResponse<Invoice> | HTTPErrorResponse;

/**
 * Creates a new invoice
 * @param createInvoiceRequest The invoice data to create
 * @returns Promise with the created invoice or error
 */
export async function createInvoice(
	createInvoiceRequest: CreateInvoiceRequest
): Promise<CreateInvoiceResponse> {
	try {
		const response = await api.post<HTTPSuccessResponse<Invoice>>(
			"/api/invoices",
			createInvoiceRequest
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
