import { deleteInvoice } from "@/api/invoices/delete-invoice";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useState } from "react";

export function useDeleteInvoice() {
	const queryClient = useQueryClient();

	const [isDeleteInvoiceDialogOpen, setIsDeleteInvoiceDialogOpen] =
		useState(false);

	const { mutate: deleteInvoiceFn, isPending: isLoadingDeleteInvoice } =
		useMutation({
			mutationFn: (invoiceId: string) => deleteInvoice(invoiceId),
			mutationKey: ["delete-invoice"],
			onSuccess: () => {
				queryClient.invalidateQueries({
					queryKey: ["invoices"],
				});
				toast.success("Conta excluída com sucesso!");
			},
		});

	return {
		deleteInvoiceFn,
		isLoadingDeleteInvoice,
		isDeleteInvoiceDialogOpen,
		setIsDeleteInvoiceDialogOpen,
	};
}
