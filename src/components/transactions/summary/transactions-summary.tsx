import { SummaryCard } from "@/components/card/summary-card";
import { useTransactions } from "@/hooks/transactions/use-transactions";
import { formatToBRL } from "@/utils/format-to-brl";
import {
	ChartNoAxesCombined,
	DollarSign,
	TrendingDown,
	TrendingUp,
} from "lucide-react";

export function TransactionsSummary() {
	const { totalDeposits, totalExpenses, totalInvestments } = useTransactions();

	return (
		<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
			<SummaryCard
				title="Saldo"
				amount={`${formatToBRL(totalDeposits - totalExpenses)}`}
				description={"Saldo total disponível"}
				icon={<DollarSign className="h-5 w-5 text-indigo-500" />}
				backgroundColor="bg-indigo-50"
			/>

			<SummaryCard
				title="Depósitos"
				amount={`${formatToBRL(totalDeposits)}`}
				description={"Depósitos totais"}
				icon={<TrendingDown className="h-5 w-5 text-green-500" />}
				backgroundColor="bg-green-50"
			/>

			<SummaryCard
				title="Despesas"
				amount={`${formatToBRL(totalExpenses)}`}
				description={"Despesas totais"}
				icon={<TrendingUp className="h-5 w-5 text-red-500" />}
				backgroundColor="bg-red-50"
			/>

			<SummaryCard
				title="Investimentos"
				amount={`${formatToBRL(totalInvestments)}`}
				description={"Investimentos totais"}
				icon={<ChartNoAxesCombined className="h-5 w-5 text-blue-500" />}
				backgroundColor="bg-blue-50"
			/>
		</div>
	);
}
