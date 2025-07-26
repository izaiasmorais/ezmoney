import { useQuery } from "@tanstack/react-query";
import { z } from "zod";
import type { HTTPErrorResponse, HTTPSuccessResponse } from "@/@types/http";
import { api } from "@/lib/axios";

export const transactionSchema = z.object({
	id: z.string().uuid(),
	description: z.string(),
	amount: z.string(),
	type: z.enum(["INCOME", "EXPENSE"]),
	createdAt: z.string(),
	updatedAt: z.string(),
	paymentMethod: z.object({
		name: z.string(),
		color: z.string(),
	}),
	invoice: z.string().nullable(),
	category: z.object({
		name: z.string(),
		color: z.string(),
	}),
});

export type Transaction = z.infer<typeof transactionSchema>;

type GetTransactionsResponse =
	| HTTPSuccessResponse<Transaction[]>
	| HTTPErrorResponse;

export async function getTransactions(): Promise<GetTransactionsResponse> {
	const response = await api.get<GetTransactionsResponse>("/transactions");

	if (response.data.success) {
		return response.data;
	}

	return {
		success: false,
		errors: response.data.errors,
		data: null,
	};
}

export function useGetTransactions() {
	const { data, isLoading: isLoadingGetTransactions } = useQuery({
		queryKey: ["get-transactions"],
		queryFn: getTransactions,
	});

	return {
		transactions: data?.data ?? [],
		isLoadingGetTransactions,
	};
}
