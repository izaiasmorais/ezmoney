"use client";
import {
	ArrowBigDownDash,
	ArrowBigUpDash,
	CreditCard,
	DollarSign,
} from "lucide-react";
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
				label="Entradas"
				value={summary.income.value}
				transactions={summary.income.count}
				Icon={ArrowBigDownDash}
			/>

			<TransactionsSummaryCard
				label="Saídas"
				value={summary.expense.value}
				transactions={summary.expense.count}
				Icon={ArrowBigUpDash}
			/>

			<TransactionsSummaryCard
				label="Saldo Total"
				value={summary.balance.value}
				transactions={summary.balance.count}
				Icon={DollarSign}
				countLabel="contas bancárias"
			/>

			<TransactionsSummaryCard
				label="Limite Disponível"
				value={summary.availableLimit.value}
				transactions={summary.availableLimit.count}
				Icon={CreditCard}
				countLabel="cartões de crédito"
			/>
		</div>
	);
}
