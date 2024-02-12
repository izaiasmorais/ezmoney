import { SummaryCard } from "./summary-card";
import { ArrowDownCircle, ArrowUpCircle, Wallet2 } from "lucide-react";

export function Summary() {
	return (
		<section id="summary" className="grid gap-6 md:grid-cols-3">
			<SummaryCard
				title="Income"
				icon={<ArrowDownCircle size={20} />}
				value={3234.78}
				description="+2.1% from last month"
			/>

			<SummaryCard
				title="Expenses"
				icon={<ArrowUpCircle size={20} />}
				value={2315.78}
				description="-6.34% from last month"
			/>

			<SummaryCard
				title="Total Balance"
				icon={<Wallet2 size={20} />}
				value={1115.6}
				description="+3.14 from last month"
			/>
		</section>
	);
}
