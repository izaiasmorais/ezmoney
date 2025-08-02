import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import type { HTTPErrorResponse, HTTPSuccessResponse } from "@/@types/http";
import { api } from "@/lib/axios";
import { queryClient } from "@/lib/react-query";

type DeleteBankAccountResponse = HTTPSuccessResponse<null> | HTTPErrorResponse;

export async function deleteBankAccount(
	bankAccountId: string
): Promise<DeleteBankAccountResponse> {
	try {
		const response = await api.delete<HTTPSuccessResponse<null>>(
			`/bank-accounts/${bankAccountId}`
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

export function useDeleteBankAccount() {
	const [isDeleteBankAccountDialogOpen, setIsDeleteBankAccountDialogOpen] =
		useState(false);

	const {
		mutateAsync: deleteBankAccountFn,
		isPending: isLoadingDeleteBankAccount,
	} = useMutation({
		mutationKey: ["delete-bank-account"],
		mutationFn: deleteBankAccount,
		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({ queryKey: ["get-bank-accounts"] });
				setIsDeleteBankAccountDialogOpen(false);
				toast.success("Conta bancária excluída com sucesso");
				return;
			}

			for (const error of response.errors) {
				toast.error(error);
			}
		},
	});

	return {
		deleteBankAccountFn,
		isLoadingDeleteBankAccount,
		isDeleteBankAccountDialogOpen,
		setIsDeleteBankAccountDialogOpen,
	};
}
