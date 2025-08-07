"use client";
import {
	ArrowBigDownDash,
	ArrowBigUpDash,
	DollarSign,
	FileText,
	TrendingUp,
} from "lucide-react";
import { useGetBudgetsSummary } from "@/hooks/budgets/use-get-budgets-summary";
import { BudgetsSummaryCard } from "./summary-card";
import { BudgetsSummarySkeleton } from "./summary-skeleton";

export function BudgetsSummary() {
	const { summary, isLoadingSummary } = useGetBudgetsSummary();

	if (isLoadingSummary) {
		return <BudgetsSummarySkeleton />;
	}

	return (
		<div className="w-full flex flex-wrap md:flex-nowrap gap-4">
			<BudgetsSummaryCard
				label="Entradas"
				value={summary.income.value}
				count={summary.income.count}
				Icon={ArrowBigDownDash}
				singularDescription="transação"
				pluralDescription="transações"
			/>

			<BudgetsSummaryCard
				label="Saídas"
				value={summary.expense.value}
				count={summary.expense.count}
				Icon={ArrowBigUpDash}
				singularDescription="transação"
				pluralDescription="transações"
			/>

			<BudgetsSummaryCard
				label="Saldo Total"
				Icon={DollarSign}
				value={summary.totalBalance.value}
				count={summary.totalBalance.count}
				singularDescription="conta bancária"
				pluralDescription="contas bancárias"
			/>

			<BudgetsSummaryCard
				label="Faturas Pendentes"
				Icon={FileText}
				value={summary.invoices.value}
				count={summary.invoices.count}
				singularDescription="fatura pendente"
				pluralDescription="faturas pendentes"
			/>

			<BudgetsSummaryCard
				label="Saldo Restante"
				value={summary.remainingBalance.value}
				count={summary.remainingBalance.count}
				Icon={TrendingUp}
				customDescription="Valor Estimado"
			/>
		</div>
	);
}
