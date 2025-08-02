"use client";
import { useMemo } from "react";
import { useGetBankAccounts } from "../bank-accounts/use-get-bank-accounts";
import { useGetTransactions } from "./use-get-transactions";

export function useGetTransactionsSummary() {
	const { transactions, isLoadingGetTransactions } = useGetTransactions();
	const { bankAccounts, creditCards, isLoadingGetBankAccounts } =
		useGetBankAccounts();

	const summary = useMemo(() => {
		const income = transactions.filter(
			(transaction) => transaction.type === "INCOME"
		);
		const expense = transactions.filter(
			(transaction) => transaction.type === "EXPENSE"
		);

		const totalIncome = income.reduce(
			(acc, transaction) => acc + parseFloat(transaction.amount),
			0
		);
		const totalExpense = expense.reduce(
			(acc, transaction) => acc + parseFloat(transaction.amount),
			0
		);

		const totalBalance = bankAccounts.reduce(
			(acc, account) => acc + account.balance,
			0
		);

		const availableLimit = creditCards.reduce(
			(acc, card) => acc + (card.availableLimit || 0),
			0
		);

		return {
			balance: {
				value: totalBalance,
				count: transactions.length,
			},
			availableLimit: {
				value: availableLimit,
				count: creditCards.length,
			},
			income: {
				value: totalIncome,
				count: income.length,
			},
			expense: {
				value: totalExpense,
				count: expense.length,
			},
		};
	}, [transactions, bankAccounts, creditCards]);

	return {
		summary,
		isLoadingSummary: isLoadingGetTransactions || isLoadingGetBankAccounts,
	};
}
