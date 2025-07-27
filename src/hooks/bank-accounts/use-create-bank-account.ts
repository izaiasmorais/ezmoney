import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import type { HTTPErrorResponse, HTTPSuccessResponse } from "@/@types/http";
import { api } from "@/lib/axios";
import { useFormMutation } from "../form/use-form-mutation";

export const createBankAccountRequestSchema = z
	.object({
		name: z.string().min(1, "O Nome é obrigatório"),
		type: z.enum(["CREDIT_CARD", "BANK"]),
		color: z
			.string()
			.regex(
				/^#[0-9A-F]{6}$/i,
				"Cor deve estar no formato hexadecimal (#FFFFFF)"
			),
		balance: z.coerce.number().min(0).optional(),
		creditLimit: z.coerce
			.number()
			.min(0, "O Limite de crédito deve ser maior que 0")
			.optional(),
		closingDay: z.coerce.number().min(0).max(31).optional(),
		dueDay: z.coerce.number().min(0).max(31).optional(),
	})
	.superRefine((data, ctx) => {
		if (data.type === "BANK") {
			if (data.balance === undefined || data.balance === null) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message: "Saldo inicial é obrigatório para contas bancárias",
					path: ["balance"],
				});
			}
		}

		if (data.type === "CREDIT_CARD") {
			if (
				data.creditLimit === undefined ||
				data.creditLimit === null ||
				data.creditLimit === 0
			) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message: "Limite de crédito é obrigatório para cartões de crédito",
					path: ["creditLimit"],
				});
			}

			if (
				data.closingDay === undefined ||
				data.closingDay === null ||
				data.closingDay === 0
			) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message: "Dia do fechamento é obrigatório para cartões de crédito",
					path: ["closingDay"],
				});
			}

			if (
				data.dueDay === undefined ||
				data.dueDay === null ||
				data.dueDay === 0
			) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message: "Dia do vencimento é obrigatório para cartões de crédito",
					path: ["dueDay"],
				});
			}
		}
	});

export type CreateBankAccountRequest = z.infer<
	typeof createBankAccountRequestSchema
>;

type CreateBankAccountApiResponse =
	| HTTPSuccessResponse<null>
	| HTTPErrorResponse;

export async function createBankAccount(
	data: CreateBankAccountRequest
): Promise<CreateBankAccountApiResponse> {
	try {
		const response = await api.post<CreateBankAccountApiResponse>(
			"/bank-accounts",
			data
		);
		return response.data;
	} catch (error) {
		if (error instanceof AxiosError && error.response?.data) {
			return error.response.data;
		}
		return {
			success: false,
			errors: ["Erro desconhecido ao criar conta bancária"],
			data: null,
		};
	}
}

export function useCreateBankAccount() {
	const [isCreateBankAccountSheetOpen, setIsCreateBankAccountSheetOpen] =
		useState(false);

	const queryClient = useQueryClient();

	const form = useFormMutation({
		schema: createBankAccountRequestSchema,
		defaultValues: {
			name: "",
			type: "BANK" as const,
			color: "#00D4AA",
			balance: 0,
			creditLimit: 0,
			closingDay: 0,
			dueDay: 0,
		},
		onSubmit: (data) => {
			if (data.type === "BANK") {
				createBankAccountFn({
					name: data.name,
					type: data.type,
					color: data.color,
					balance: data.balance,
				});
				return;
			}

			createBankAccountFn({
				name: data.name,
				type: data.type,
				color: data.color,
				creditLimit: data.creditLimit,
				closingDay: data.closingDay,
				dueDay: data.dueDay,
			});
		},
	});

	const {
		mutateAsync: createBankAccountFn,
		isPending: isLoadingCreateBankAccount,
	} = useMutation({
		mutationKey: ["create-bank-account"],
		mutationFn: createBankAccount,
		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({ queryKey: ["get-bank-accounts"] });
				setIsCreateBankAccountSheetOpen(false);
				toast.success("Conta bancária criada com sucesso!");
				form.reset();
				return;
			}

			for (const error of response.errors) {
				toast.error(error);
			}
		},
		onError: () => {
			toast.error("Erro inesperado ao criar conta bancária");
		},
	});

	return {
		form,
		isLoadingCreateBankAccount,
		createBankAccount: createBankAccountFn,
		isCreateBankAccountSheetOpen,
		setIsCreateBankAccountSheetOpen,
	};
}
