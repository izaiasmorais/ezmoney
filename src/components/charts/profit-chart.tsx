"use client";
import { LineChart, Line } from "recharts";
import { useChart } from "@/stores/chart";
import { Chart } from "./chart";

export function ProfitChart() {
	const profitChartSortType = useChart((state) => state.profitChartSortType);

	return (
		<Chart chartType={LineChart} type={Line} sortBy={profitChartSortType} />
	);
}
