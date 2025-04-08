"use client";
import { useFormMutation } from "../use-form-mutation";
import { createInvoice } from "@/api/invoices/create-invoice";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { createInvoiceRequestSchema, Invoice } from "@/@types/invoice";

export type InvoiceWithDateObject = Omit<Invoice, "createdAt"> & {
	createdAt: Date;
};

export type GetInvoicesQueryResult = InvoiceWithDateObject[];

export function useCreateInvoice() {
	const router = useRouter();
	const form = useFormMutation({
		schema: createInvoiceRequestSchema,
		defaultValues: {
			name: "",
			createdAt: new Date().toISOString().split("T")[0],
			dueDate: "",
			unitValue: 0,
			installments: 1,
			paymentType: "unique",
			status: "pending",
			category: "general",
			description: "",
		},
		onSubmit: (data) => {
			createInvoiceFn({
				name: data.name,
				dueDate: data.dueDate,
				unitValue: data.unitValue,
				installments: data.installments,
				status: data.status,
				category: data.category,
				paymentType: data.paymentType,
				createdAt: data.createdAt,
				description: data.description,
			});
		},
	});

	const { mutate: createInvoiceFn, isPending: isLoadingCreateInvoice } =
		useMutation({
			mutationFn: createInvoice,
			mutationKey: ["create-invoice"],
			onSuccess: (response) => {
				if (response.success === true) {
					toast.success("Fatura criada com sucesso!");

					router.push("/contas");
					return;
				}
				toast.error(response.error);
			},
		});

	return {
		form,
		isLoadingCreateInvoice,
	};
}
