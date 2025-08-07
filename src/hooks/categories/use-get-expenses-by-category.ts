import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { z } from "zod";
import type { HTTPErrorResponse, HTTPSuccessResponse } from "@/@types/http";
import { api } from "@/lib/axios";

export const getExpensesByCategoryResponseSchema = z.array(
	z.object({
		id: z.string(),
		category: z.string(),
		color: z.string(),
		value: z.number(),
	})
);

export type ExpensesByCategory = z.infer<
	typeof getExpensesByCategoryResponseSchema
>;

type GetExpensesByCategoryResponse =
	| HTTPSuccessResponse<ExpensesByCategory>
	| HTTPErrorResponse;

export async function getExpensesByCategory(): Promise<GetExpensesByCategoryResponse> {
	try {
		const response = await api.get<HTTPSuccessResponse<ExpensesByCategory>>(
			"/categories/expenses"
		);
		return response.data;
	} catch (error) {
		if (error instanceof AxiosError && error.response?.data) {
			return error.response.data;
		}
		return {
			success: false,
			errors: ["Erro desconhecido"],
			data: null,
		};
	}
}

export function useGetExpensesByCategory() {
	const { data: result, isLoading: isLoadingGetExpensesByCategory } = useQuery(
		{
			queryKey: ["get-expenses-by-category"],
			queryFn: () => getExpensesByCategory(),
		}
	);

	return {
		expensesByCategory: result?.success ? result.data : null,
		isLoadingGetExpensesByCategory,
	};
}
