import { HTTPSuccessResponse, HTTPErrorResponse } from "@/@types/http";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { Invoice } from "@/@types/invoice";

type GetInvoicesResponse = HTTPSuccessResponse<Invoice[]> | HTTPErrorResponse;

export async function getInvoices(): Promise<GetInvoicesResponse> {
	try {
		const response = await api.get<HTTPSuccessResponse<Invoice[]>>(
			"/api/invoices/all"
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
