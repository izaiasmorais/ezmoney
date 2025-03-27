"use client";
import { useState } from "react";
import { useFormMutation } from "./use-form-mutation";
import { z } from "zod";

export const invoiceFormSchema = z.object({
	name: z.string().min(1, "O nome é obrigatório"),
	createdAt: z.string().min(1, "A data de criação é obrigatória"),
	dueDate: z.string().min(1, "A data de vencimento é obrigatória"),
	unitValue: z.coerce
		.number({
			message: "O valor unitário é obrigatório",
		})
		.min(0, "O valor deve ser maior ou igual a 0"),
	installments: z.coerce
		.number({
			message: "O número de parcelas é obrigatório",
		})
		.min(1, "Parcelas deve ser maior ou igual a 1"),
	totalValue: z.coerce.number().optional(),
	status: z.enum(["paid", "overdue", "draft", "pending"]),
	type: z.enum(["fixed", "recurring"]),
});

export function useCreateInvoice() {
	const [isSheetOpen, setIsSheetOpen] = useState(false);

	const form = useFormMutation({
		schema: invoiceFormSchema,
		defaultValues: {
			name: "",
			createdAt: new Date().toISOString().split("T")[0],
			dueDate: "",
			unitValue: undefined,
			totalValue: undefined,
			installments: undefined,
			status: "draft" as const,
			type: "fixed" as const,
		},
		onSubmit: (data) => {
			console.log(data);
		},
	});

	// const { mutate: createInvoiceFn, isPending: isLoadingCreateInvoice } =
	// 	useMutation({
	// 		mutationFn: createInvoice,
	// 		mutationKey: ["create-invoice"],
	// 		onSuccess: () => {
	// 			queryClient.invalidateQueries({
	// 				queryKey: ["invoices"],
	// 			});
	// 			toast.success("Fatura criada com sucesso!");
	// 			setIsSheetOpen(false);
	// 			form.reset();
	// 		},
	// 		onError: () => {
	// 			toast.error("Erro ao criar a fatura. Tente novamente.");
	// 		},
	// 	});

	return {
		form,
		isSheetOpen,
		setIsSheetOpen,
	};
}
