import { useMutation } from "@tanstack/react-query";
import { updateInvoice } from "@/api/invoices/update-invoice";
import { toast } from "sonner";
import { queryClient } from "@/lib/react-query";

export function useUpdateInvoice() {
	const {
		mutateAsync: updateInvoiceFn,
		isPending: isLoadingUpdateInvoiceStatus,
	} = useMutation({
		mutationKey: ["update-invoice-status"],
		mutationFn: updateInvoice,
		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({
					queryKey: ["invoices"],
				});
				toast.success("Status da fatura atualizado com sucesso!");
				return;
			}

			toast.error(response.error);
		},
	});

	return {
		updateInvoiceFn,
		isLoadingUpdateInvoiceStatus,
	};
}
