import { useMutation } from "@tanstack/react-query";
import { updateTransaction } from "@/api/transactions/update-transaction";
import { toast } from "sonner";
import { queryClient } from "@/lib/react-query";

export function useUpdateTransaction() {
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
				return;
			}

			toast.error(response.error);
		},
	});

	return {
		updateTransactionFn,
		isLoadingUpdateTransaction,
	};
}
