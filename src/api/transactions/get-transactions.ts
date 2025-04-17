import { HTTPSuccessResponse, HTTPErrorResponse } from "@/@types/http";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { Transaction } from "@/@types/transaction";

type GetTransactionsResponse =
	| HTTPSuccessResponse<Transaction[]>
	| HTTPErrorResponse;

export async function getTransactions(): Promise<GetTransactionsResponse> {
	try {
		const response = await api.get<HTTPSuccessResponse<Transaction[]>>(
			"/api/transactions/all"
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
