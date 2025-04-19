import { useMutation } from "@tanstack/react-query";
import { updateTransaction } from "@/api/transactions/update-transaction";
import { toast } from "sonner";
import { queryClient } from "@/lib/react-query";
import { useState } from "react";

export function useUpdateTransaction() {
	const [isUpdateTransactionSheetOpen, setIsUpdateTransactionSheetOpen] =
		useState(false);

	const {
		mutateAsync: updateTransactionFn,
		isPending: isLoadingUpdateTransaction,
	} = useMutation({
		mutationKey: ["update-transaction"],
		mutationFn: updateTransaction,
		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({
					queryKey: ["transactions"],
				});
				toast.success("Transação atualizada com sucesso!");
				setIsUpdateTransactionSheetOpen(false);
				return;
			}

			toast.error(response.error);
		},
	});

	return {
		updateTransactionFn,
		isLoadingUpdateTransaction,
		isUpdateTransactionSheetOpen,
		setIsUpdateTransactionSheetOpen,
	};
}
