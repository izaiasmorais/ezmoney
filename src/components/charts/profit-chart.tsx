"use client";
import { LineChart, Line } from "recharts";
import { ProfitChartSortSelect } from "./profit-chart-sort-select";
import { Card } from "@/components/ui/card";
import { useChart } from "@/stores/chart";
import { Chart } from "./chart";

export function ProfitChart() {
	const profitChartSortType = useChart((state) => state.profitChartSortType);

	return (
		<Card className="flex flex-col p-6 gap-6 h-[550px]">
			<div className="flex items-center justify-between">
				<strong className="text-xl font-medium">
					Profit by {profitChartSortType}
				</strong>
				<div className="flex items-center gap-2">
					<ProfitChartSortSelect />
				</div>
			</div>

			<Chart chartType={LineChart} type={Line} sortBy={profitChartSortType} />
		</Card>
	);
}
