import { deleteTransaction } from "@/api/transactions/delete-transaction";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useState } from "react";

export function useDeleteTransaction() {
	const queryClient = useQueryClient();

	const [isDeleteTransactionDialogOpen, setIsDeleteTransactionDialogOpen] =
		useState(false);

	const { mutate: deleteTransactionFn, isPending: isLoadingDeleteTransaction } =
		useMutation({
			mutationFn: (transactionId: string) => deleteTransaction(transactionId),
			mutationKey: ["delete-transaction"],
			onSuccess: (response) => {
				if (response.success) {
					queryClient.invalidateQueries({
						queryKey: ["get-transactions"],
					});
					setIsDeleteTransactionDialogOpen(false);
					toast.success("Transação excluída com sucesso!");
					return;
				}

				toast.error(response.error);
			},
		});

	return {
		deleteTransactionFn,
		isLoadingDeleteTransaction,
		isDeleteTransactionDialogOpen,
		setIsDeleteTransactionDialogOpen,
	};
}
