import { useMutation } from "@tanstack/react-query";
import { updateTransaction } from "@/api/transactions/update-transaction";
import { toast } from "sonner";
import { queryClient } from "@/lib/react-query";
import { useState } from "react";
import { Transaction } from "@/@types/transaction";
import { useFormMutation } from "../use-form-mutation";
import { transactionRequestSchema } from "@/@schemas/transaction";

export function useUpdateTransaction(transaction: Transaction) {
	const [isUpdateTransactionSheetOpen, setIsUpdateTransactionSheetOpen] =
		useState(false);

	const form = useFormMutation({
		schema: transactionRequestSchema,
		defaultValues: {
			name: transaction.name,
			value: transaction.value,
			category: transaction.category,
			installment: transaction.installment,
			type: transaction.type,
			createdAt: transaction.createdAt,
		},
		onSubmit: (data) => {
			updateTransactionFn({
				transactionId: transaction.id,
				data,
			});
		},
	});

	const {
		mutateAsync: updateTransactionFn,
		isPending: isLoadingUpdateTransaction,
	} = useMutation({
		mutationKey: ["update-transaction"],
		mutationFn: updateTransaction,
		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({
					queryKey: ["get-transactions"],
				});
				toast.success("Transação atualizada com sucesso!");
				setIsUpdateTransactionSheetOpen(false);
				return;
			}

			toast.error(response.error);
		},
	});

	return {
		form,
		isLoadingUpdateTransaction,
		isUpdateTransactionSheetOpen,
		setIsUpdateTransactionSheetOpen,
		updateTransactionFn,
	};
}
