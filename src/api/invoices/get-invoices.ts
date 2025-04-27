import { HTTPSuccessResponse, HTTPErrorResponse } from "@/@types/http";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { GetInvoicesRequest, Invoice } from "@/@types/invoice";

type GetInvoicesResponse = HTTPSuccessResponse<Invoice[]> | HTTPErrorResponse;

/**
 * Get invoices
 * @param GetInvoicesRequest The params to filter the invoices
 * @returns Promise with the invoices or error
 */
export async function getInvoices(
	params?: GetInvoicesRequest
): Promise<GetInvoicesResponse> {
	try {
		const response = await api.get<HTTPSuccessResponse<Invoice[]>>(
			"/api/invoices/all",
			{
				params: params,
			}
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
