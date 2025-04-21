import { useMutation } from "@tanstack/react-query";
import { updateInvoice } from "@/api/invoices/update-invoice";
import { toast } from "sonner";
import { queryClient } from "@/lib/react-query";
import { useState } from "react";

export function useUpdateInvoice() {
	const [isUpdateInvoiceDialogOpen, setIsUpdateInvoiceDialogOpen] =
		useState(false);

	const { mutateAsync: updateInvoiceFn, isPending: isLoadingUpdateInvoice } =
		useMutation({
			mutationKey: ["update-invoice"],
			mutationFn: updateInvoice,
			onSuccess: (response) => {
				if (response.success) {
					queryClient.invalidateQueries({
						queryKey: ["invoices"],
					});
					setIsUpdateInvoiceDialogOpen(false);
					toast.success("Fatura atualizada com sucesso!");
					return;
				}

				toast.error(response.error);
			},
		});

	return {
		updateInvoiceFn,
		isLoadingUpdateInvoice,
		isUpdateInvoiceDialogOpen,
		setIsUpdateInvoiceDialogOpen,
	};
}
