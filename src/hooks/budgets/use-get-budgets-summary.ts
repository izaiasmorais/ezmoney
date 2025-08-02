"use client";
import { useMemo } from "react";
import { useGetBankAccounts } from "../bank-accounts/use-get-bank-accounts";
import { useGetInvoices } from "../invoices/use-get-invoices";
import { useGetTransactionsSummary } from "../transactions/use-get-transactions-summary";

export function useGetBudgetsSummary() {
	const {
		summary: transactionsSummary,
		isLoadingSummary: isLoadingTransactions,
	} = useGetTransactionsSummary();
	const { invoices, isLoadingGetInvoices } = useGetInvoices();
	const { bankAccounts, isLoadingGetBankAccounts } = useGetBankAccounts();

	const summary = useMemo(() => {
		const pendingInvoices = invoices.filter(
			(invoice) => invoice.status === "PENDING"
		);
		const overdueInvoices = invoices.filter(
			(invoice) => invoice.status === "OVERDUE"
		);
		const totalInvoicesValue = [...pendingInvoices, ...overdueInvoices].reduce(
			(acc, invoice) => acc + invoice.unitValue,
			0
		);

		const totalBalance = transactionsSummary.balance.value;

		const availableLimit = transactionsSummary.availableLimit.value;

		const remainingBalance = totalBalance + availableLimit - totalInvoicesValue;

		const totalBankAccount = bankAccounts.filter(
			(bankAccount) => bankAccount.type !== "CREDIT_CARD"
		);

		return {
			invoices: {
				value: totalInvoicesValue,
				count: pendingInvoices.length + overdueInvoices.length,
			},
			totalBalance: {
				value: totalBalance,
				count: totalBankAccount.length,
			},
			availableLimit: {
				value: availableLimit,
				count: transactionsSummary.availableLimit.count,
			},
			remainingBalance: {
				value: remainingBalance,
				count: 1,
			},
		};
	}, [transactionsSummary, invoices, bankAccounts]);

	return {
		summary,
		isLoadingSummary:
			isLoadingTransactions || isLoadingGetInvoices || isLoadingGetBankAccounts,
	};
}
