import { useMemo } from "react";
import { Transaction } from "@/@types/transaction";
import { useGetTransactions } from "./use-get-transactions";

interface TransactionsSummaryData {
	transactionsData: {
		totalAmount: string;
		depositAmount: string;
		expenseAmount: string;
		balance: string;
		investmentAmount: string;
		totalCount: number;
		depositCount: number;
		expenseCount: number;
		investmentCount: number;
	};
	isLoading: boolean;
}

export function useTransactionsSummary(): TransactionsSummaryData {
	const { data, isLoadingGetTransactions } = useGetTransactions();

	const summary = useMemo(() => {
		const transactions: Transaction[] = data ? data : [];

		if (!transactions?.length) {
			return {
				totalAmount: "R$ 0,00",
				depositAmount: "R$ 0,00",
				expenseAmount: "R$ 0,00",
				balance: "R$ 0,00",
				investmentAmount: "R$ 0,00",
				totalCount: 0,
				depositCount: 0,
				expenseCount: 0,
				investmentCount: 0,
			};
		}

		const total = transactions.reduce(
			(sum, transaction) => sum + transaction.value,
			0
		);

		const deposit = transactions
			.filter((transaction) => transaction.type === "deposit")
			.reduce((sum, transaction) => sum + transaction.value, 0);

		const expense = transactions
			.filter((transaction) => transaction.type === "expense")
			.reduce((sum, transaction) => sum + transaction.value, 0);

		const investment = transactions
			.filter((transaction) => transaction.type === "investment")
			.reduce((sum, transaction) => sum + transaction.value, 0);

		const balance = deposit - expense - investment;

		const totalCount = transactions.length;

		const depositCount = transactions.filter(
			(transaction) => transaction.type === "deposit"
		).length;

		const expenseCount = transactions.filter(
			(transaction) => transaction.type === "expense"
		).length;

		const investmentCount = transactions.filter(
			(transaction) => transaction.type === "investment"
		).length;

		const formatCurrency = (value: number) =>
			value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

		return {
			totalAmount: formatCurrency(total),
			depositAmount: formatCurrency(deposit),
			expenseAmount: formatCurrency(expense),
			balance: formatCurrency(balance),
			investmentAmount: formatCurrency(investment),
			totalCount,
			depositCount,
			expenseCount,
			investmentCount,
		};
	}, [data]);

	return {
		transactionsData: {
			...summary,
		},
		isLoading: isLoadingGetTransactions,
	};
}
