import { HTTPSuccessResponse, HTTPErrorResponse } from "@/@types/http";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { Transaction } from "@/@types/transaction";
import { TransactionRequest } from "@/@schemas/transaction";

export type UpdateTransactionParams = {
	transactionId: string;
	data: TransactionRequest;
};

export type UpdateTransactionResponse =
	| HTTPSuccessResponse<Transaction>
	| HTTPErrorResponse;

/**
 * Updates any properties of an existing transaction
 * @param transactionId The ID of the transaction to update
 * @param data The transaction properties to update
 * @returns Promise with the updated transaction or error
 */
export async function updateTransaction({
	transactionId,
	data,
}: UpdateTransactionParams): Promise<UpdateTransactionResponse> {
	try {
		const response = await api.put<HTTPSuccessResponse<Transaction>>(
			`/api/transactions/${transactionId}`,
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
