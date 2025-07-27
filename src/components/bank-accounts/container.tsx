"use client";
import { useGetBankAccounts } from "@/hooks/bank-accounts/use-get-bank-accounts";
import { BankAccountSkeleton } from "./bank/bank-account-skeleton";
import { BankAccounts } from "./bank/bank-accounts";
import { CreditCardSkeleton } from "./credit-cards/credit-card-skeleton";
import { CreditCards } from "./credit-cards/credit-cards";

export function BankAccountsContainer() {
	const { bankAccounts, creditCards, isLoadingGetBankAccounts } =
		useGetBankAccounts();

	return (
		<div className="space-y-8">
			{isLoadingGetBankAccounts && <BankAccountSkeleton />}

			{!isLoadingGetBankAccounts && (
				<BankAccounts bankAccounts={bankAccounts} />
			)}

			{isLoadingGetBankAccounts && <CreditCardSkeleton />}

			{!isLoadingGetBankAccounts && <CreditCards creditCards={creditCards} />}
		</div>
	);
}
