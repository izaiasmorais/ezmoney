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
		<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
			<SummaryCard
				title="Saldo"
				amount={transactionsData.totalAmount}
				description={"Saldo total disponível"}
				icon={<DollarSign className="h-5 w-5 text-indigo-500" />}
				backgroundColor="bg-indigo-50"
			/>

			<SummaryCard
				title="Depósitos"
				amount={transactionsData.depositAmount}
				description={"Depósitos totais"}
				icon={<TrendingDown className="h-5 w-5 text-green-500" />}
				backgroundColor="bg-green-50"
			/>

			<SummaryCard
				title="Despesas"
				amount={transactionsData.expenseAmount}
				description={"Despesas totais"}
				icon={<TrendingUp className="h-5 w-5 text-red-500" />}
				backgroundColor="bg-red-50"
			/>

			<SummaryCard
				title="Investimentos"
				amount={transactionsData.investmentAmount}
				description={"Investimentos totais"}
				icon={<ChartNoAxesCombined className="h-5 w-5 text-blue-500" />}
				backgroundColor="bg-blue-50"
			/>
		</div>
	);
}
