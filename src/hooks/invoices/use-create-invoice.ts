import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import type { HTTPErrorResponse, HTTPSuccessResponse } from "@/@types/http";
import { api } from "@/lib/axios";
import { queryClient } from "@/lib/react-query";
import { useFormMutation } from "../form/use-form-mutation";

export const createInvoiceSchema = z.object({
	name: z.string().min(1, "O nome é obrigatório"),
	description: z.string().min(1, "A descrição é obrigatória"),
	issueDate: z.string().min(1, "A data de emissão é obrigatória"),
	dueDate: z.string().min(1, "A data de vencimento é obrigatória"),
	unitValue: z.coerce
		.number()
		.min(0.01, "O valor unitário deve ser maior que 0"),
	totalInstallments: z.coerce
		.number()
		.min(1, "O número de parcelas deve ser maior que 0"),
	categoryId: z.string().min(1, "A categoria é obrigatória"),
});

export type CreateInvoiceData = z.infer<typeof createInvoiceSchema>;

type CreateInvoiceResponse = HTTPSuccessResponse<null> | HTTPErrorResponse;

export async function createInvoice(
	data: CreateInvoiceData
): Promise<CreateInvoiceResponse> {
	const response = await api.post<CreateInvoiceResponse>("/invoices", data);

	if (response.data.success) {
		return response.data;
	}

	return {
		success: false,
		errors: response.data.errors,
		data: null,
	};
}

export function useCreateInvoice() {
	const [isCreateInvoiceSheetOpen, setIsCreateInvoiceSheetOpen] =
		useState(false);
	const form = useFormMutation({
		schema: createInvoiceSchema,
		defaultValues: {
			name: "",
			description: "",
			issueDate: new Date().toISOString(),
			dueDate: "",
			unitValue: 0,
			totalInstallments: 1,
			categoryId: "",
		},
		onSubmit: (data) => {
			createInvoiceFn(data);
		},
	});

	const { mutateAsync: createInvoiceFn, isPending: isLoadingCreateInvoice } =
		useMutation({
			mutationFn: createInvoice,
			onSuccess: (response) => {
				if (response.success) {
					queryClient.invalidateQueries({ queryKey: ["get-invoices"] });
					setIsCreateInvoiceSheetOpen(false);
					toast.success("Fatura criada com sucesso");
					return;
				}

				for (const error of response.errors) {
					toast.error(error);
				}
			},
		});

	return {
		isLoadingCreateInvoice,
		form,
		isCreateInvoiceSheetOpen,
		setIsCreateInvoiceSheetOpen,
	};
}
