import { useQuery } from "@tanstack/react-query";
import { getTransactions } from "@/api/transactions/get-transactions";

export function useGetTransactions() {
	const { data: result, isLoading: isLoadingGetTransactions } = useQuery({
		queryKey: ["get-transactions"],
		queryFn: getTransactions,
	});

	return {
		data: result?.success ? result.data : [],
		isLoadingGetTransactions,
	};
}
