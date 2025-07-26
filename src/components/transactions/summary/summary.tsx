"use client";
import { DollarSign, TrendingDown, TrendingUp } from "lucide-react";
import { useGetTransactionsSummary } from "@/hooks/transactions/use-get-transactions-summary";
import { TransactionsSummaryCard } from "./summary-card";
import { TransactionsSummarySkeleton } from "./summary-skeleton";

export function TransactionsSummary() {
	const { summary, isLoadingSummary } = useGetTransactionsSummary();

	if (isLoadingSummary) {
		return <TransactionsSummarySkeleton />;
	}

	return (
		<div className="w-full flex flex-wrap md:flex-nowrap gap-4">
			<TransactionsSummaryCard
				label="Saldo Total"
				value={summary.balance.value}
				transactions={summary.balance.count}
				Icon={DollarSign}
			/>

			<TransactionsSummaryCard
				label="Receitas"
				value={summary.income.value}
				transactions={summary.income.count}
				Icon={TrendingUp}
			/>

			<TransactionsSummaryCard
				label="Despesas"
				value={summary.expense.value}
				transactions={summary.expense.count}
				Icon={TrendingDown}
			/>
		</div>
	);
}
