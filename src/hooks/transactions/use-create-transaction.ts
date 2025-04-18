"use client";
import { useFormMutation } from "../use-form-mutation";
import { createTransaction } from "@/api/transactions/create-transaction";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { createTransactionSchema, Transaction } from "@/@types/transaction";
import { useState } from "react";
import { queryClient } from "@/lib/react-query";

export type TransactionWithDateObject = Omit<Transaction, "createdAt"> & {
	createdAt: Date;
};

export type GetTransactionsQueryResult = TransactionWithDateObject[];

export function useCreateTransaction() {
	const [isCreateTransactionSheetOpen, setIsCreateTransactionSheetOpen] =
		useState(false);

	const form = useFormMutation({
		schema: createTransactionSchema,
		defaultValues: {
			name: "",
			value: 0,
			category: "",
			installment: 1,
			type: "expense",
			createdAt: new Date().toISOString(),
		},
		onSubmit: (data) => {
			createTransactionFn({
				name: data.name,
				value: data.value,
				category: data.category,
				installment: data.installment,
				type: data.type as "deposit" | "expense" | "investment",
				createdAt: data.createdAt,
			});
		},
	});

	const { mutate: createTransactionFn, isPending: isLoadingCreateTransaction } =
		useMutation({
			mutationFn: createTransaction,
			mutationKey: ["create-transaction"],
			onSuccess: (response) => {
				if (response.success === true) {
					queryClient.invalidateQueries({ queryKey: ["transactions"] });
					toast.success("Transação criada com sucesso!");
					setIsCreateTransactionSheetOpen(false);
					form.reset();
					return;
				}
				toast.error(response.error);
			},
		});

	return {
		form,
		isLoadingCreateTransaction,
		isCreateTransactionSheetOpen,
		setIsCreateTransactionSheetOpen,
	};
}
