import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import type { HTTPErrorResponse, HTTPSuccessResponse } from "@/@types/http";
import { api } from "@/lib/axios";
import { queryClient } from "@/lib/react-query";
import { useFormMutation } from "../form/use-form-mutation";

export const createCategorySchema = z.object({
	name: z.string().min(1, "Nome é obrigatório"),
	color: z.string().min(1, "Cor é obrigatória"),
});

export type CreateCategoryData = z.infer<typeof createCategorySchema>;

type CreateCategoryResponse = HTTPSuccessResponse<null> | HTTPErrorResponse;

export async function createCategory(
	data: CreateCategoryData
): Promise<CreateCategoryResponse> {
	const response = await api.post<CreateCategoryResponse>("/categories", data);

	if (response.data.success) {
		return response.data;
	}

	return {
		success: false,
		errors: response.data.errors,
		data: null,
	};
}

export function useCreateCategory() {
	const [isCreateCategorySheetOpen, setIsCreateCategorySheetOpen] =
		useState(false);
	const form = useFormMutation({
		schema: createCategorySchema,
		defaultValues: {
			name: "",
			color: "",
		},
		onSubmit: (data) => {
			createCategoryMutation(data);
		},
	});

	const { mutate: createCategoryMutation, isPending: isLoadingCreateCategory } =
		useMutation({
			mutationFn: createCategory,
			onSuccess: (response) => {
				if (response.success) {
					queryClient.invalidateQueries({ queryKey: ["get-categories"] });
					setIsCreateCategorySheetOpen(false);
					form.reset();
					toast.success("Categoria criada com sucesso");
					return;
				}

				for (const error of response.errors) {
					toast.error(error);
				}
			},
		});

	return {
		createCategory: createCategoryMutation,
		isLoadingCreateCategory,
		form,
		isCreateCategorySheetOpen,
		setIsCreateCategorySheetOpen,
	};
}
