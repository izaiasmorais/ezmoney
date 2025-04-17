"use client";
import { useFormMutation } from "../use-form-mutation";
import { createTransaction } from "@/api/transactions/create-transaction";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { createTransactionSchema, Transaction } from "@/@types/transaction";

export type TransactionWithDateObject = Omit<Transaction, "createdAt"> & {
	createdAt: Date;
};

export type GetTransactionsQueryResult = TransactionWithDateObject[];

export function useCreateTransaction() {
	const router = useRouter();
	const form = useFormMutation({
		schema: createTransactionSchema,
		defaultValues: {
			name: "",
			value: 0,
			category: "",
			installment: 1,
			type: "expense",
		},
		onSubmit: (data) => {
			createTransactionFn({
				name: data.name,
				value: data.value,
				category: data.category,
				installment: data.installment,
				type: data.type as "deposit" | "expense" | "investment",
			});
		},
	});

	const { mutate: createTransactionFn, isPending: isLoadingCreateTransaction } =
		useMutation({
			mutationFn: createTransaction,
			mutationKey: ["create-transaction"],
			onSuccess: (response) => {
				if (response.success === true) {
					toast.success("Transação criada com sucesso!");

					router.push("/transacoes");
					return;
				}
				toast.error(response.error);
			},
		});

	return {
		form,
		isLoadingCreateTransaction,
	};
}
