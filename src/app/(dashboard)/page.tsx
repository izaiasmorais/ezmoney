import { TransactionsBarChart } from "@/components/dashboard/transactions-bar-chart";
import { TransactionsChart } from "@/components/dashboard/transactions-category-pie-chart";
import { Summary } from "@/components/dashboard/transactions-summary";

export default function Page() {
	return (
		<div className="flex flex-1 flex-col gap-4 p-4 pt-0">
			<Summary />

			<div className="flex-1 grid grid-cols-1 lg:grid-cols-3 space-y-4 lg:gap-4 w-full">
				<TransactionsChart />
				<TransactionsBarChart />
			</div>
		</div>
	);
}
