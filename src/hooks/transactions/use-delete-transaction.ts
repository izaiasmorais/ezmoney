import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import type { HTTPErrorResponse, HTTPSuccessResponse } from "@/@types/http";
import { api } from "@/lib/axios";
import { queryClient } from "@/lib/react-query";

type DeleteTransactionResponse = HTTPSuccessResponse<null> | HTTPErrorResponse;

export async function deleteTransaction(
	transactionId: string
): Promise<DeleteTransactionResponse> {
	try {
		const response = await api.delete<HTTPSuccessResponse<null>>(
			`/transactions/${transactionId}`
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

export function useDeleteTransaction() {
	const [isDeleteTransactionDialogOpen, setIsDeleteTransactionDialogOpen] =
		useState(false);

	const {
		mutateAsync: deleteTransactionFn,
		isPending: isLoadingDeleteTransaction,
	} = useMutation({
		mutationKey: ["delete-transaction"],
		mutationFn: deleteTransaction,
		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({ queryKey: ["get-transactions"] });
				setIsDeleteTransactionDialogOpen(false);
				toast.success("Transação excluída com sucesso");
				return;
			}

			for (const error of response.errors) {
				toast.error(error);
			}
		},
	});

	return {
		deleteTransactionFn,
		isLoadingDeleteTransaction,
		isDeleteTransactionDialogOpen,
		setIsDeleteTransactionDialogOpen,
	};
}
