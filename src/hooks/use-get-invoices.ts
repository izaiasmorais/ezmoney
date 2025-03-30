import { useQuery } from "@tanstack/react-query";
import { getInvoices } from "@/api/invoices/get-invoices";

export function useGetInvoices() {
	const { data: result, isLoading: isLoadingGetInvoices } = useQuery({
		queryKey: ["get-invoices"],
		queryFn: getInvoices,
		staleTime: 60 * 60 * 5, // 5 horas
		refetchOnMount: false,
		refetchOnWindowFocus: false,
	});

	return {
		data: result?.success ? result.data : [],
		isLoadingGetInvoices,
	};
}
