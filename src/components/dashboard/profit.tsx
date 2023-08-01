import ProfitChart from "../charts/profit-chart";
import { YearSelect } from "./year-select";
import { Card } from "../ui/card";
import { ChartTypeSelect } from "./chart-type-select";

export function ProfitBox() {
	return (
		<Card className="flex-1 flex flex-col p-6 gap-6">
			<div className="flex flex-wrap gap-2 justify-between items-center">
				<div>
					<h3 className="font-semibold text-1xl">Profit</h3>
					<p className="text-sm text-slate-500">
						Your profit in the last 12 months.
					</p>
				</div>
				<div className="flex gap-2 items-center">
					<ChartTypeSelect />
					<YearSelect />
				</div>
			</div>
			<ProfitChart />
		</Card>
	);
}
