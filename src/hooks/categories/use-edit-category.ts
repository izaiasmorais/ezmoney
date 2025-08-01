import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import type { HTTPErrorResponse, HTTPSuccessResponse } from "@/@types/http";
import { api } from "@/lib/axios";
import { queryClient } from "@/lib/react-query";
import { useFormMutation } from "../form/use-form-mutation";

export const editCategorySchema = z.object({
	name: z.string().min(1, "Nome é obrigatório"),
	color: z.string().min(1, "Cor é obrigatória"),
});

export type EditCategoryData = z.infer<typeof editCategorySchema>;

type EditCategoryResponse = HTTPSuccessResponse<null> | HTTPErrorResponse;

export async function editCategory(
	categoryId: string,
	data: EditCategoryData
): Promise<EditCategoryResponse> {
	const response = await api.put<EditCategoryResponse>(
		`/categories/${categoryId}`,
		data
	);

	if (response.data.success) {
		return response.data;
	}

	return {
		success: false,
		errors: response.data.errors,
		data: null,
	};
}

export function useEditCategory(
	categoryId: string,
	initialData?: EditCategoryData
) {
	const [isEditCategorySheetOpen, setIsEditCategorySheetOpen] = useState(false);

	const form = useFormMutation({
		schema: editCategorySchema,
		defaultValues: initialData || {
			name: "",
			color: "",
		},
		onSubmit: (data) => {
			editCategoryMutation(data);
		},
	});

	const { mutate: editCategoryMutation, isPending: isLoadingEditCategory } =
		useMutation({
			mutationFn: (data: EditCategoryData) => editCategory(categoryId, data),
			onSuccess: (response) => {
				if (response.success) {
					queryClient.invalidateQueries({ queryKey: ["get-categories"] });
					setIsEditCategorySheetOpen(false);
					toast.success("Categoria editada com sucesso");
					return;
				}

				for (const error of response.errors) {
					toast.error(error);
				}
			},
		});

	return {
		editCategory: editCategoryMutation,
		isLoadingEditCategory,
		form,
		isEditCategorySheetOpen,
		setIsEditCategorySheetOpen,
	};
}
