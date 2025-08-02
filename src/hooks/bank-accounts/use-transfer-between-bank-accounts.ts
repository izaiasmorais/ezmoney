import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import type { HTTPErrorResponse, HTTPSuccessResponse } from "@/@types/http";
import { api } from "@/lib/axios";
import { queryClient } from "@/lib/react-query";
import { useFormMutation } from "../form/use-form-mutation";

export const transferBetweenBankAccountsSchema = z.object({
	value: z.number().min(0.01, "Valor deve ser maior que zero"),
	fromAccountId: z.string().min(1, "Conta de origem é obrigatória"),
	toAccountId: z.string().min(1, "Conta de destino é obrigatória"),
});

export type TransferBetweenBankAccountsData = z.infer<
	typeof transferBetweenBankAccountsSchema
>;

type TransferBetweenBankAccountsResponse =
	| HTTPSuccessResponse<null>
	| HTTPErrorResponse;

export async function transferBetweenBankAccounts(
	data: TransferBetweenBankAccountsData
): Promise<TransferBetweenBankAccountsResponse> {
	const response = await api.post<TransferBetweenBankAccountsResponse>(
		"/bank-accounts/transfer",
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

export function useTransferBetweenBankAccounts() {
	const [isBankTransferSheetOpen, setIsBankTransferSheetOpen] = useState(false);

	const form = useFormMutation({
		schema: transferBetweenBankAccountsSchema,
		defaultValues: {
			value: 0,
			fromAccountId: "",
			toAccountId: "",
		},
		onSubmit: (data) => {
			transferBetweenBankAccountsFn(data);
		},
	});

	const {
		mutateAsync: transferBetweenBankAccountsFn,
		isPending: isLoadingTransferBetweenBankAccounts,
	} = useMutation({
		mutationFn: transferBetweenBankAccounts,
		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({ queryKey: ["get-bank-accounts"] });
				setIsBankTransferSheetOpen(false);
				toast.success("Transferência realizada com sucesso");
				form.reset();
				return;
			}

			for (const error of response.errors) {
				toast.error(error);
			}
		},
	});

	return {
		form,
		isLoadingTransferBetweenBankAccounts,
		isBankTransferSheetOpen,
		setIsBankTransferSheetOpen,
	};
}
