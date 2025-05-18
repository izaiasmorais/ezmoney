import { HTTPSuccessResponse, HTTPErrorResponse } from "@/@types/http";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { Transaction } from "@/@types/transaction";
import { TransactionRequest } from "@/@schemas/transaction";

type CreateTransactionResponse =
	| HTTPSuccessResponse<Transaction>
	| HTTPErrorResponse;

/**
 * Creates a new transaction
 * @param createTransactionRequest The transaction data to create
 * @returns Promise with the created transaction or error
 */
export async function createTransaction(
	createTransactionRequest: TransactionRequest
): Promise<CreateTransactionResponse> {
	try {
		const response = await api.post<HTTPSuccessResponse<Transaction>>(
			"/api/transactions",
			createTransactionRequest
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
