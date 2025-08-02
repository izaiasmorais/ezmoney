import { useQuery } from "@tanstack/react-query";
import { z } from "zod";
import type { HTTPErrorResponse, HTTPSuccessResponse } from "@/@types/http";
import { api } from "@/lib/axios";

export const bankAccountSchema = z.object({
	id: z.string().uuid(),
	name: z.string(),
	type: z.enum(["BANK", "CREDIT_CARD"]),
	balance: z.number(),
	color: z.string(),
	creditLimit: z.number().nullable(),
	spentLimit: z.number().nullable(),
	availableLimit: z.number().nullable(),
	closingDay: z.number().nullable(),
	dueDay: z.number().nullable(),
	isActive: z.boolean(),
});

export type BankAccount = z.infer<typeof bankAccountSchema>;

export const getBankAccountsResponseSchema = z.object({
	bank_accounts: z.array(bankAccountSchema),
	credit_cards: z.array(bankAccountSchema),
});

type GetBankAccountsResponse =
	| HTTPSuccessResponse<z.infer<typeof getBankAccountsResponseSchema>>
	| HTTPErrorResponse;

export async function getBankAccounts(): Promise<GetBankAccountsResponse> {
	const response = await api.get<GetBankAccountsResponse>("/bank-accounts");

	if (response.data.success) {
		return response.data;
	}

	return {
		success: false,
		errors: response.data.errors,
		data: null,
	};
}

export function useGetBankAccounts() {
	const { data, isLoading: isLoadingGetBankAccounts } = useQuery({
		queryKey: ["get-bank-accounts"],
		queryFn: getBankAccounts,
	});

	return {
		bankAccounts: data?.data?.bank_accounts ?? [],
		creditCards: data?.data?.credit_cards ?? [],
		isLoadingGetBankAccounts,
	};
}
