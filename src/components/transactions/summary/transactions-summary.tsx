"use client";
import { SummaryCard } from "@/components/card/summary-card";
import { useTransactionsSummary } from "@/hooks/transactions/use-transactions-summary";
import {
	ChartNoAxesCombined,
	DollarSign,
	TrendingDown,
	TrendingUp,
} from "lucide-react";
import { TransactionsSummarySkeleton } from "./transactions-summary-skeleton";

export function TransactionsSummary() {
	const { transactionsData, isLoading } = useTransactionsSummary();

	if (isLoading) {
		return <TransactionsSummarySkeleton />;
	}

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
			<SummaryCard
				title="Saldo"
				amount={transactionsData.balance}
				description={"Saldo total disponível"}
				icon={
					<DollarSign className="h-5 w-5 text-violet-500 dark:text-violet-300" />
				}
				backgroundColor="bg-violet-50 dark:bg-violet-900/20"
			/>

			<SummaryCard
				title="Depósitos"
				amount={transactionsData.depositAmount}
				description={"Depósitos totais"}
				icon={
					<TrendingDown className="h-5 w-5 text-green-500 dark:text-green-300" />
				}
				backgroundColor="bg-green-50 dark:bg-green-900/20"
			/>

			<SummaryCard
				title="Despesas"
				amount={transactionsData.expenseAmount}
				description={"Despesas totais"}
				icon={<TrendingUp className="h-5 w-5 text-red-500 dark:text-red-300" />}
				backgroundColor="bg-red-50 dark:bg-red-900/20"
			/>

			<SummaryCard
				title="Investimentos"
				amount={transactionsData.investmentAmount}
				description={"Investimentos totais"}
				icon={
					<ChartNoAxesCombined className="h-5 w-5 text-blue-500 dark:text-blue-300" />
				}
				backgroundColor="bg-blue-50 dark:bg-blue-900/20"
			/>
		</div>
	);
}
