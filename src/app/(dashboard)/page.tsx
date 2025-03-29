import { TransactionsBarChart } from "@/components/dashboard/transactions-bar-chart";
import { TransactionsPieChart } from "@/components/dashboard/transactions-pie-chart";
import { Summary } from "@/components/dashboard/transactions-summary";

export default async function Page() {
	return (
		<div className="flex flex-1 flex-col gap-4 p-4 pt-0">
			<Summary />

			<div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
				<TransactionsPieChart />

				<div className="lg:col-span-2">
					<TransactionsBarChart />
				</div>
			</div>
		</div>
	);
}
