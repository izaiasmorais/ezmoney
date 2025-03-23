import { useTransactions } from "@/hooks/use-transactions";
import { SummaryCard } from "./summary-card";

export function Summary() {
	const { totalDeposits, totalExpenses, totalInvestments } = useTransactions();

	return (
		<div className="grid auto-rows-min gap-4 md:grid-cols-3">
			<SummaryCard title="Entradas" value={totalDeposits} />
			<SummaryCard title="Saídas" value={totalExpenses} />
			<SummaryCard title="Investimentos" value={totalInvestments} />
		</div>
	);
}
