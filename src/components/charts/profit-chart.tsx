"use client";
import { LineChart, Line } from "recharts";
import { ChartSortSelect } from "./chart-sort-select";
import { Card } from "@/components/ui/card";
import { useChart } from "@/stores/chart";
import { Chart } from "./chart";

export function ProfitChart() {
	const earnChartSortType = useChart((state) => state.earnChartSortType);

	return (
		<Card className="flex flex-col p-6 gap-6 h-[550px]">
			<div className="flex items-center justify-between">
				<strong className="text-xl font-medium">
					Earning by {earnChartSortType}
				</strong>
				<div className="flex items-center gap-2">
					<ChartSortSelect />
				</div>
			</div>

			<Chart chartType={LineChart} type={Line} />
		</Card>
	);
}
