import { HTTPSuccessResponse, HTTPErrorResponse } from "@/@types/http";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { Invoice } from "@/@types/invoices";

type GetInvoicesResult = HTTPSuccessResponse<Invoice[]> | HTTPErrorResponse;

export async function getInvoices(): Promise<GetInvoicesResult> {
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
