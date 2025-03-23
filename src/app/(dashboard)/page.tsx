import { TransactionsChart } from "@/components/dashboard/transactions-category-pie-chart";
import { Summary } from "@/components/dashboard/transactions-summary";

export default function Page() {
	return (
		<div className="flex flex-1 flex-col gap-4 p-4 pt-0">
			<Summary />

			<div className="grid grid-cols-3 gap-4">
				<TransactionsChart />
			</div>
		</div>
	);
}
