import { SummaryCard } from "./summary-card";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";

export function Summary() {
	return (
		<div className="gap-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
			<SummaryCard
				title="Total Revenue"
				icon={<DollarSign size={20} />}
				value="R$15,231.89"
				description="+20.1% from last month"
			/>

			<SummaryCard
				title="Clients"
				icon={<Users size={20} />}
				value="235"
				description="+16.6% from last month"
			/>

			<SummaryCard
				title="Sales"
				icon={<CreditCard size={20} />}
				value="265"
				description="+19% from last month"
			/>

			<SummaryCard
				title="Active now"
				icon={<Activity size={20} />}
				value="573"
				description="+145 since last hour"
			/>
		</div>
	);
}
