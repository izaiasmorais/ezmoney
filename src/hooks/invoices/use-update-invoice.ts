import { useMutation } from "@tanstack/react-query";
import { updateInvoice } from "@/api/invoices/update-invoice";
import { toast } from "sonner";
import { queryClient } from "@/lib/react-query";

export function useUpdateInvoice() {
	const {
		mutateAsync: updateInvoiceFn,
		isPending: isLoadingUpdateInvoice,
	} = useMutation({
		mutationKey: ["update-invoice"],
		mutationFn: updateInvoice,
		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({
					queryKey: ["invoices"],
				});
				toast.success("Fatura atualizada com sucesso!");
				return;
			}

			toast.error(response.error);
		},
	});

	return {
		updateInvoiceFn,
		isLoadingUpdateInvoice,
	};
}
