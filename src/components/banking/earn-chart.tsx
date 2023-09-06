"use client";
import { Card } from "@/components/ui/card";
import { data } from "@/mocks/earn";
import React from "react";
import {
	BarChart,
	Bar,
	AreaChart,
	Area,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	ResponsiveContainer,
	ScatterChart,
	Scatter,
} from "recharts";
import { EarnChartTypeSelect } from "./earn-chart-type-select";
import { useChart } from "@/stores/chart";
import { ChartTypeSelect } from "../dashboard/chart-type-select";

export function EarnChart() {
	const { chartType, earnChartSortType } = useChart((state) => {
		return {
			earnChartSortType: state.earnChartSortType,
			chartType: state.chartType,
		};
	});

	const dataContent =
		earnChartSortType === "month"
			? data.earnByMonth
			: earnChartSortType === "day"
			? data.earnByDay
			: data.earnByYear;

	return (
		<Card className="p-6 flex flex-col gap-6 h-[500px]">
			<div className="flex items-center justify-between">
				<strong className="text-xl font-medium">
					Earning by {earnChartSortType}
				</strong>
				<div className="flex items-center gap-2">
					<ChartTypeSelect />
					<EarnChartTypeSelect />
				</div>
			</div>

			<ResponsiveContainer width="100%" height="100%">
				{chartType === "bar" ? (
					<BarChart data={dataContent}>
						<Tooltip />
						<Legend />
						<YAxis />
						<XAxis dataKey="name" tick={{ fontFamily: "Inter, sans-serif" }} />
						<Bar dataKey="earn" />
					</BarChart>
				) : chartType === "area" ? (
					<AreaChart data={dataContent}>
						<Tooltip />
						<Legend />
						<YAxis />
						<XAxis dataKey="name" tick={{ fontFamily: "Inter, sans-serif" }} />
						<Area type="monotone" dataKey="earn" stroke="#000" fill="#000" />
					</AreaChart>
				) : (
					<ScatterChart data={dataContent}>
						<Tooltip />
						<Legend />
						<YAxis />
						<XAxis dataKey="name" tick={{ fontFamily: "Inter, sans-serif" }} />
						<Scatter dataKey="earn" />
					</ScatterChart>
				)}
			</ResponsiveContainer>
		</Card>
	);
}
