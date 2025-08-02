import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import type { HTTPErrorResponse, HTTPSuccessResponse } from "@/@types/http";
import { api } from "@/lib/axios";
import { queryClient } from "@/lib/react-query";
import { useFormMutation } from "../form/use-form-mutation";

export const markInstallmentAsPaidSchema = z
	.object({
		bankAccountId: z.string().optional(),
		generateTransaction: z.boolean(),
	})
	.refine(
		(data) => {
			if (data.generateTransaction) {
				return data.bankAccountId && data.bankAccountId.trim() !== "";
			}
			return true;
		},
		{
			message: "A forma de pagamento é obrigatória",
			path: ["bankAccountId"],
		}
	);

export type MarkInstallmentAsPaidRequest = z.infer<
	typeof markInstallmentAsPaidSchema
>;

type MarkInstallmentAsPaidApiResponse =
	| HTTPSuccessResponse<null>
	| HTTPErrorResponse;

export async function markInstallmentAsPaid(
	installmentId: string,
	data: MarkInstallmentAsPaidRequest
): Promise<MarkInstallmentAsPaidApiResponse> {
	try {
		const response = await api.patch<MarkInstallmentAsPaidApiResponse>(
			`/installments/${installmentId}/pay`,
			data
		);
		return response.data;
	} catch (error) {
		if (error instanceof AxiosError && error.response?.data) {
			return error.response.data;
		}
		return {
			success: false,
			errors: ["Erro desconhecido ao marcar parcela como paga"],
			data: null,
		};
	}
}

export function useMarkInstallmentAsPaid(installmentId: string) {
	const [
		isMarkInstallmentAsPaidModalOpen,
		setIsMarkInstallmentAsPaidModalOpen,
	] = useState(false);

	const form = useFormMutation<MarkInstallmentAsPaidRequest>({
		schema: markInstallmentAsPaidSchema,
		defaultValues: {
			bankAccountId: "",
			generateTransaction: false,
		},
		onSubmit: (data) => {
			if (data.generateTransaction) {
				markInstallmentAsPaidFn(data);
			} else {
				markInstallmentAsPaidFn({
					generateTransaction: false,
				});
			}
		},
	});

	const {
		mutateAsync: markInstallmentAsPaidFn,
		isPending: isLoadingMarkInstallmentAsPaid,
	} = useMutation({
		mutationKey: ["mark-installment-as-paid", installmentId],
		mutationFn: (data: MarkInstallmentAsPaidRequest) =>
			markInstallmentAsPaid(installmentId, data),
		onSuccess: (response) => {
			if (response.success) {
				const queriesToInvalidate = [
					["get-invoices"],
					["get-invoice-installments"],
					["get-bank-accounts"],
					["get-transactions"],
				];

				queriesToInvalidate.forEach((queryKey) => {
					queryClient.invalidateQueries({ queryKey });
				});
				setIsMarkInstallmentAsPaidModalOpen(false);
				form.reset();
				toast.success("Parcela paga com sucesso!");
				return;
			}

			for (const error of response.errors) {
				toast.error(error);
			}
		},
		onError: () => {
			toast.error("Erro inesperado ao marcar parcela como paga");
		},
	});

	return {
		form,
		isLoadingMarkInstallmentAsPaid,
		markInstallmentAsPaid: markInstallmentAsPaidFn,
		isMarkInstallmentAsPaidModalOpen,
		setIsMarkInstallmentAsPaidModalOpen,
	};
}
