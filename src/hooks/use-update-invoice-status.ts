import { useMutation } from "@tanstack/react-query";
import { updateInvoiceStatus } from "@/api/invoices/update-invoice-status";
import { toast } from "sonner";
import { queryClient } from "@/lib/react-query";

export function useUpdateInvoiceStatus() {
	const {
		mutateAsync: updateInvoiceStatusFn,
		isPending: isLoadingUpdateInvoiceStatus,
	} = useMutation({
		mutationKey: ["update-invoice-status"],
		mutationFn: updateInvoiceStatus,
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
		updateInvoiceStatusFn,
		isLoadingUpdateInvoiceStatus,
	};
}
