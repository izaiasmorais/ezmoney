"use client";
import { useMemo } from "react";
import { useGetTransactions } from "./use-get-transactions";

export function useGetTransactionsSummary() {
	const { transactions, isLoadingGetTransactions } = useGetTransactions();

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
		const balance = totalIncome - totalExpense;

		return {
			balance: {
				value: balance,
				count: transactions.length,
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
	}, [transactions]);

	return { summary, isLoadingSummary: isLoadingGetTransactions };
}
