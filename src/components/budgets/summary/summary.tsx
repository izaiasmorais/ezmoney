"use client";
import { CreditCard, FileText, TrendingUp, Wallet } from "lucide-react";
import { useGetBudgetsSummary } from "@/hooks/budgets/use-get-budgets-summary";
import { BudgetsSummaryCard } from "./summary-card";
import { BudgetsSummarySkeleton } from "./summary-skeleton";

export function BudgetsSummary() {
	const { summary, isLoadingSummary } = useGetBudgetsSummary();

	if (isLoadingSummary) {
		return <BudgetsSummarySkeleton />;
	}

	return (
		<div className="w-full flex gap-4">
			<BudgetsSummaryCard
				label="Saldo Total"
				Icon={Wallet}
				value={summary.totalBalance.value}
				count={summary.totalBalance.count}
				singularDescription="conta bancária"
				pluralDescription="contas bancárias"
			/>

			<BudgetsSummaryCard
				label="Limite Disponível"
				value={summary.availableLimit.value}
				count={summary.availableLimit.count}
				singularDescription="cartão de crédito"
				pluralDescription="cartões de crédito"
				Icon={CreditCard}
			/>

			<BudgetsSummaryCard
				label="Faturas"
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
				customDescription="Estimados"
			/>
		</div>
	);
}
