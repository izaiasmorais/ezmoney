import { TransactionsBarChart } from "@/components/dashboard/transactions-bar-chart";
import { TransactionsPieChart } from "@/components/dashboard/transactions-pie-chart";
import { TransactionsSummary } from "@/components/transactions/summary/transactions-summary";

export default function Page() {
	return (
		<div className="flex flex-1 flex-col gap-4">
			<TransactionsSummary />

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
				<TransactionsPieChart />
				<TransactionsBarChart />
			</div>
		</div>
	);
}
