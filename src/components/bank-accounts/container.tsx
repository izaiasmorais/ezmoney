"use client";
import { useGetBankAccounts } from "@/hooks/bank-accounts/use-get-bank-accounts";
import { BankAccounts } from "./bank-accounts";
import { CreditCards } from "./credit-cards";

export function BankAccountsContainer() {
	const { bankAccounts, creditCards, isLoadingGetBankAccounts } =
		useGetBankAccounts();

	return (
		<div className="space-y-8">
			<BankAccounts bankAccounts={bankAccounts} />
			<CreditCards creditCards={creditCards} />
		</div>
	);
}
