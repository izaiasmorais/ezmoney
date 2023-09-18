"use client";
import { ExpensesChart } from "@/components/charts/expenses-chart";
import { ProfitChart } from "@/components/charts/profit-chart";
import { Summary } from "@/components/dashboard/summary";
import { Card } from "@/components/ui/card";
import { useChart } from "@/stores/chart";

export default function Dashboard() {
	const profitChartSortType = useChart((state) => state.profitChartSortType);

	return (
		<main className="flex flex-col gap-4 md:gap-6">
			<Summary />

			<section id="charts" className="grid gap-4 md:gap-6 xl:grid-cols-3">
				<Card className="p-4 md:p-6 space-y-4 md:space-y-6 xl:col-span-2">
					<div className="flex justify-start w-full">
						<strong className="text-xl font-medium">
							Profit by {profitChartSortType}
						</strong>
					</div>

					<ProfitChart />
				</Card>

				<Card className="p-4 md:p-6 space-y-4 md:space-y-6">
					<div className="flex justify-start w-full">
						<strong className="text-xl font-medium">Spending</strong>
					</div>

					<ExpensesChart />
				</Card>
			</section>
		</main>
	);
}
