import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import type { HTTPErrorResponse, HTTPSuccessResponse } from "@/@types/http";
import { api } from "@/lib/axios";
import { useFormMutation } from "../form/use-form-mutation";

export const createTransactionRequestSchema = z.object({
	description: z.string().min(1, "A descrição é obrigatória"),
	date: z.string().optional(),
	amount: z.number().min(0.01, "O valor deve ser maior que zero"),
	type: z.enum(["INCOME", "EXPENSE"]),
	bankAccountId: z.string().min(1, "A conta bancária é obrigatória"),
});

export type CreateTransactionRequest = z.infer<
	typeof createTransactionRequestSchema
>;

type CreateTransactionApiResponse =
	| HTTPSuccessResponse<null>
	| HTTPErrorResponse;

export async function createTransaction(
	data: CreateTransactionRequest
): Promise<CreateTransactionApiResponse> {
	try {
		const response = await api.post<CreateTransactionApiResponse>(
			"/transactions",
			data
		);
		return response.data;
	} catch (error) {
		if (error instanceof AxiosError && error.response?.data) {
			return error.response.data;
		}
		return {
			success: false,
			errors: ["Erro desconhecido ao criar transação"],
			data: null,
		};
	}
}

export function useCreateTransaction() {
	const [isCreateTransactionSheetOpen, setIsCreateTransactionSheetOpen] =
		useState(false);

	const queryClient = useQueryClient();

	const form = useFormMutation<CreateTransactionRequest>({
		schema: createTransactionRequestSchema,
		defaultValues: {
			description: "",
			amount: 0,
			type: "EXPENSE",
			bankAccountId: "",
			date: new Date().toISOString(),
		},
		onSubmit: (data) => {
			createTransactionFn(data);
		},
	});

	const {
		mutateAsync: createTransactionFn,
		isPending: isLoadingCreateTransaction,
	} = useMutation({
		mutationKey: ["create-transaction"],
		mutationFn: createTransaction,
		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({ queryKey: ["get-transactions"] });
				queryClient.invalidateQueries({ queryKey: ["get-bank-accounts"] });
				setIsCreateTransactionSheetOpen(false);
				form.reset();
				toast.success("Transação criada com sucesso!");
				return;
			}

			for (const error of response.errors) {
				toast.error(error);
			}
		},
		onError: () => {
			toast.error("Erro inesperado ao criar transação");
		},
	});

	return {
		form,
		isLoadingCreateTransaction,
		createTransaction: createTransactionFn,
		isCreateTransactionSheetOpen,
		setIsCreateTransactionSheetOpen,
	};
}
