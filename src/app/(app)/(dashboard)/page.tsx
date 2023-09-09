import { ProfitChart } from "@/components/charts/profit-chart";
import { Summary } from "@/components/dashboard/summary";
import { Card } from "@/components/ui/card";

export default function Dashboard() {
	return (
		<main className="flex flex-col mt-6 gap-6">
			<Summary />

			<div className="flex flex-wrap gap-6">
				<div className="flex-1">
					<ProfitChart />
				</div>

				<Card className="flex-1 max-w-[372px] flex flex-col p-6 gap-6">
					<strong className="text-xl font-medium">Spending</strong>
				</Card>
			</div>
		</main>
	);
}
