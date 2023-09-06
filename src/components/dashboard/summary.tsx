import { SummaryCard } from "./summary-card";
import {
	ArrowDownCircle,
	ArrowUpCircle,
	CandlestickChart,
	LineChart,
	PiggyBank,
	TrendingDown,
	TrendingUp,
	Wallet2,
} from "lucide-react";

export function Summary() {
	return (
		<div className="gap-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
			<SummaryCard
				title="Deposits"
				icon={<TrendingDown size={20} />}
				value={3234.78}
				description="+2.1% from last month"
			/>

			<SummaryCard
				title="Withdrawals"
				icon={<TrendingUp size={20} />}
				value={2315.78}
				description="-6.34% from last month"
			/>

			<SummaryCard
				title="Investiments"
				icon={<LineChart size={20} />}
				value={764.44}
				description="+19% from last month"
			/>

			<SummaryCard
				title="Total Balance"
				icon={<Wallet2 size={20} />}
				value={1115.6}
				description="+3.14 from last month"
			/>
		</div>
	);
}
