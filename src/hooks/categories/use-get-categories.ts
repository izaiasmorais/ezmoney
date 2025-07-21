import { useQuery } from "@tanstack/react-query";
import { z } from "zod";
import type { HTTPErrorResponse, HTTPSuccessResponse } from "@/@types/http";
import { api } from "@/lib/axios";

export const categorySchema = z.object({
	id: z.string().uuid(),
	name: z.string(),
	color: z.string(),
	createdAt: z.date(),
});

export type Category = z.infer<typeof categorySchema>;

type GetCategoriesResponse =
	| HTTPSuccessResponse<{
			categories: Category[];
	  }>
	| HTTPErrorResponse;

export async function getCategories(): Promise<GetCategoriesResponse> {
	const response = await api.get<GetCategoriesResponse>("/categories");

	if (response.data.success) {
		return response.data;
	}

	return {
		success: false,
		errors: response.data.errors,
		data: null,
	};
}

export function useGetCategories() {
	const { data, isLoading: isLoadingGetCategories } = useQuery({
		queryKey: ["get-categories"],
		queryFn: getCategories,
	});

	return {
		categories: data?.data?.categories ?? [],
		isLoadingGetCategories,
	};
}
