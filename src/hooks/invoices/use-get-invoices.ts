import { useQuery } from "@tanstack/react-query";
import { getInvoices } from "@/api/invoices/get-invoices";

export function useGetInvoices() {
	const { data: result, isLoading: isLoadingGetInvoices } = useQuery({
		queryKey: ["invoices"],
		queryFn: () => getInvoices(),
	});

	return {
		data: result?.success ? result.data : [],
		isLoadingGetInvoices,
	};
}
