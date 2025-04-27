import { exportTransactions } from "@/api/transactions/export-transactions";
import { useMutation } from "@tanstack/react-query";

export function useExportTransactions() {
	const {
		mutateAsync: exportTransactionsFn,
		isPending: isLoadingExportTransactions,
	} = useMutation({
		mutationKey: ["export-transactions"],
		mutationFn: exportTransactions,
	});

	return {
		exportTransactionsFn,
		isLoadingExportTransactions,
	};
}
