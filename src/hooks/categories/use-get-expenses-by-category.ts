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

export type ExpensesByCategorie = z.infer<
	typeof getExpensesByCategorieResponseSchema
>;

type GetExpensesByCategorieResponse =
	| HTTPSuccessResponse<ExpensesByCategorie>
	| HTTPErrorResponse;

export async function getExpensesByCategorie(): Promise<GetExpensesByCategorieResponse> {
	try {
		const response = await api.get<HTTPSuccessResponse<ExpensesByCategorie>>(
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

export function useGetExpensesByCategorie() {
	const { data: result, isLoading: isLoadingGetExpensesByCategorie } = useQuery(
		{
			queryKey: ["get-expenses-by-categorie"],
			queryFn: () => getExpensesByCategorie(),
		}
	);

	return {
		expensesByCategorie: result?.success ? result.data : null,
		isLoadingGetExpensesByCategorie,
	};
}
