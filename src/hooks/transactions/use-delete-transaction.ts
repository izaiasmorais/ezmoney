import { deleteTransaction } from "@/api/transactions/delete-transaction";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export function useDeleteTransaction() {
	const queryClient = useQueryClient();

	const { mutate: deleteTransactionFn, isPending: isLoadingDeleteTransaction } =
		useMutation({
			mutationFn: (transactionId: string) => deleteTransaction(transactionId),
			mutationKey: ["delete-transaction"],
			onSuccess: () => {
				queryClient.invalidateQueries({
					queryKey: ["transactions"],
				});
				toast.success("Transação excluída com sucesso!");
			},
		});

	return { deleteTransactionFn, isLoadingDeleteTransaction };
}
