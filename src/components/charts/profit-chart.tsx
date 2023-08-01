"use client";

import React, { useState, useEffect } from "react";
import { useStore } from "@/store";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
	ssr: false,
});

export default function ProfitChart() {
	const type = useStore((state) => state.type);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, [type]);

	const [chartOptions, setChartOptions] = useState<ApexCharts.ApexOptions>({
		series: [
			{
				name: "Profit",
				data: [
					3450, 2568, 4190, 3900, 1780, 3025, 2650, 4180, 3820, 2975, 4250,
					3540,
				],
				color: "#000"
			},
		],
		stroke: {
			curve: "smooth",
		},
		dataLabels: {
			enabled: false,
		},
		xaxis: {
			type: "category",
			categories: [
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
				"August",
				"September",
				"October",
				"November",
				"December",
			],
		},
		tooltip: {
			x: {
				format: "month",
			},
		},
	});

	if (mounted) {
		return (
			<div>
				<ReactApexChart
					options={chartOptions}
					series={chartOptions.series}
					height={350}
					type={type}
				/>
			</div>
		);
	}
}
