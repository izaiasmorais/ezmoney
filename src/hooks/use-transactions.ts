import { useMemo } from "react";
import { transactions } from "@/mocks/transactions";

interface TransactionsSummary {
	totalDeposits: number;
	totalExpenses: number;
	totalInvestments: number;
}

export function useTransactions(): TransactionsSummary {
	const { totalDeposits, totalExpenses, totalInvestments } = useMemo(() => {
		const totals = transactions.reduce(
			(acc, transaction) => {
				if (transaction.type === "deposit") {
					acc.totalDeposits += transaction.value;
				} else if (transaction.type === "expense") {
					acc.totalExpenses += transaction.value;
				} else if (transaction.type === "investment") {
					acc.totalInvestments += transaction.value;
				}
				return acc;
			},
			{ totalDeposits: 0, totalExpenses: 0, totalInvestments: 0 }
		);

		return totals;
	}, []);

	return {
		totalDeposits,
		totalExpenses,
		totalInvestments,
	};
}
