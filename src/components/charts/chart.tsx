import React from "react";
import {
	CartesianGrid,
	Legend,
	Tooltip,
	YAxis,
	XAxis,
	ResponsiveContainer,
} from "recharts";
import { CustomTooltip } from "./custom-tooltip";
import { ElementType } from "react";
import { useChart } from "@/stores/chart";
import { data } from "@/mocks/earn";

interface ChartProps {
	chartType: ElementType;
	type: ElementType | any;
}

export function Chart({
	chartType: ChartContainer,
	type: ChartType,
}: ChartProps) {
	const earnChartSortType = useChart((state) => state.earnChartSortType);

	const dataContent =
		earnChartSortType === "month"
			? data.earnByMonth
			: earnChartSortType === "day"
			? data.earnByDay
			: data.earnByYear;

	return (
		<ResponsiveContainer>
			<ChartContainer data={dataContent}>
				<CartesianGrid stroke="#f1f5f9" strokeDasharray="5 5" />
				<Tooltip content={<CustomTooltip />} />
				<Legend
					iconSize={12}
					iconType="circle"
					align="center"
					verticalAlign="bottom"
				/>
				<YAxis
					stroke="#475569"
					strokeWidth={0}
					tick={{
						fontFamily: "__Inter_20951f",
						fontSize: 12,
					}}
				/>
				<XAxis
					dataKey="name"
					stroke="#475569"
					strokeWidth={0}
					tick={{
						fontFamily: "__Inter_20951f",
						fontSize: 12,
					}}
				/>
				<ChartType
					dataKey="earn"
					stroke="#000"
					fill="#000"
					strokeWidth={2}
					type="monotone"
					dot={false}
				/>
			</ChartContainer>
		</ResponsiveContainer>
	);
}
