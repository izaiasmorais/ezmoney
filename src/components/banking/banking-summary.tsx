import { SummaryCard } from "@/components/dashboard/summary-card";
import { TrendingDown, TrendingUp, Wallet2 } from "lucide-react";

export function BankingSummary() {
	return (
		<div className="w-full flex gap-6">
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
				title="Total Balance"
				icon={<Wallet2 size={20} />}
				value={1115.6}
				description="+3.14 from last month"
			/>
		</div>
	);
}