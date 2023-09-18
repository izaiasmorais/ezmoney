"use client";
import { Card } from "@/components/ui/card";
import React from "react";
import {
	BarChart,
	Bar,
	AreaChart,
	Area,
	ResponsiveContainer,
	ScatterChart,
	Scatter,
	Line,
	LineChart,
} from "recharts";
import { EarnChartSortSelect } from "./earn-chart-sort-select";
import { useChart } from "@/stores/chart";
import { ChartTypeSelect } from "./chart-type-select";
import { Chart } from "./chart";

export function EarnChart() {
	const { chartType, earnChartSortType } = useChart((state) => {
		return {
			earnChartSortType: state.earnChartSortType,
			chartType: state.chartType,
		};
	});

	return (
		<Card className="p-6 flex flex-col gap-6 xl:col-span-2">
			<div className="flex flex-wrap gap-4 items-center justify-between">
				<strong className="text-xl font-medium">
					Earning by {earnChartSortType}
				</strong>
				<div className="flex items-center gap-2">
					<ChartTypeSelect />
					<EarnChartSortSelect />
				</div>
			</div>

			<ResponsiveContainer>
				{chartType === "bar" ? (
					<Chart chartType={BarChart} type={Bar} />
				) : chartType === "area" ? (
					<Chart chartType={AreaChart} type={Area} />
				) : chartType === "scatter" ? (
					<Chart chartType={ScatterChart} type={Scatter} />
				) : (
					<Chart chartType={LineChart} type={Line} />
				)}
			</ResponsiveContainer>
		</Card>
	);
}
