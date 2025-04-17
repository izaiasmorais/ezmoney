import { HTTPSuccessResponse, HTTPErrorResponse } from "@/@types/http";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";

type DeleteTransactionResponse = HTTPSuccessResponse<null> | HTTPErrorResponse;

/**
 * Deletes an existing transaction by its ID
 * @param transactionId The ID of the transaction to delete
 * @returns Promise with the response indicating success or error
 */
export async function deleteTransaction(
	transactionId: string
): Promise<DeleteTransactionResponse> {
	try {
		const response = await api.delete<HTTPSuccessResponse<null>>(
			`/api/transactions/${transactionId}`
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
