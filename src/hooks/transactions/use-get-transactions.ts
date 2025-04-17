import { useQuery } from "@tanstack/react-query";
import { getTransactions } from "@/api/transactions/get-transactions";

export function useGetTransactions() {
	const { data: result, isLoading: isLoadingGetTransactions } = useQuery({
		queryKey: ["transactions"],
		queryFn: getTransactions,
		staleTime: 1000 * 60 * 5, // 5 minutes
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
	});

	return {
		data: result?.success ? result.data : [],
		isLoadingGetTransactions,
	};
}
