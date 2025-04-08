import { deleteInvoice } from "@/api/invoices/delete-invoice";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export function useDeleteInvoice() {
	const queryClient = useQueryClient();

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

	return { deleteInvoiceFn, isLoadingDeleteInvoice };
}
