import { useTransactions } from "@/hooks/use-transactions";
import { SummaryCard } from "./transactions-summary-card";

export function Summary() {
	const { totalDeposits, totalExpenses, totalInvestments } = useTransactions();

	return (
		<div className="grid auto-rows-min gap-2 lg:gap-4 lg:grid-cols-3">
			<SummaryCard title="Entradas" value={totalDeposits} />
			<SummaryCard title="Saídas" value={totalExpenses} />
			<SummaryCard title="Investimentos" value={totalInvestments} />
		</div>
	);
}
