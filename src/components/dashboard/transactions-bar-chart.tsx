"use client";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
import { useTransactions } from "@/hooks/transactions/use-transactions";
import { useState } from "react";
import { TrasanctionsBarChartLegendCard } from "./transactions-bar-chart.legend-card";
import { TransactionsYearSelect } from "./transactions-year-select";
import { useGetTransactions } from "@/hooks/transactions/use-get-transactions";
import { TransactionsBarChartSkeleton } from "./transactions-bar-chart-skeleton";
import { formatToBRL } from "@/utils/format-to-brl";

const chartConfig = {
	totalDeposits: {
		label: "Entradas",
		color: "#a855f7", // purple-500
	},
	totalExpenses: {
		label: "Saídas",
		color: "#eab308", // yellow-500
	},
	totalInvestments: {
		label: "Investimentos",
		color: "#22d3ee", // cyan-400
	},
} satisfies ChartConfig;

export function TransactionsBarChart() {
	const [selectedYear, setSelectedYear] = useState(2025);
	const { monthlySummary } = useTransactions(selectedYear);
	const { isLoadingGetTransactions } = useGetTransactions();

	const chartData = Object.entries(monthlySummary).map(([month, data]) => ({
		month: month.charAt(0).toUpperCase() + month.slice(1),
		totalDeposits: data.totalDeposits,
		totalExpenses: data.totalExpenses,
		totalInvestments: data.totalInvestments,
	}));

	if (isLoadingGetTransactions) {
		return <TransactionsBarChartSkeleton />;
	}

	return (
		<Card className="flex flex-col shadow-none bg-transparent">
			<CardHeader>
				<div className="flex justify-between items-center">
					<div>
						<CardTitle className="text-lg">Transações por Mês</CardTitle>
						<CardDescription>{selectedYear}</CardDescription>
					</div>

					<TransactionsYearSelect onChange={setSelectedYear} />
				</div>
			</CardHeader>

			<CardContent className="flex-1">
				<ChartContainer config={chartConfig} className="w-full h-full">
					<BarChart accessibilityLayer data={chartData}>
						<CartesianGrid vertical={false} />

						<XAxis
							dataKey="month"
							tickLine={false}
							tickMargin={10}
							axisLine={false}
							tickFormatter={(value) => value.slice(0, 3)}
						/>

						<YAxis
							tickLine={false}
							axisLine={false}
							width={70}
							tickFormatter={(value) =>
								value.toLocaleString("pt-BR", {
									style: "currency",
									currency: "BRL",
									minimumFractionDigits: 0,
								})
							}
						/>

						<ChartTooltip
							content={
								<ChartTooltipContent
									formatValue={(value) => formatToBRL(Number(value))}
								/>
							}
						/>

						<Bar
							dataKey="totalExpenses"
							stackId="a"
							fill={chartConfig.totalExpenses.color}
							radius={[0, 0, 4, 4]}
						/>

						<Bar
							dataKey="totalDeposits"
							stackId="a"
							fill={chartConfig.totalDeposits.color}
							radius={[0, 0, 0, 0]}
						/>

						<Bar
							dataKey="totalInvestments"
							stackId="a"
							fill={chartConfig.totalInvestments.color}
							radius={[4, 4, 0, 0]}
						/>
					</BarChart>
				</ChartContainer>
			</CardContent>

			<CardFooter className="flex items-center justify-center gap-6 text-sm pt-4 border-t border-dashed">
				<TrasanctionsBarChartLegendCard
					color={chartConfig.totalDeposits.color}
					title="Entradas"
				/>

				<TrasanctionsBarChartLegendCard
					color={chartConfig.totalExpenses.color}
					title="Saídas"
				/>

				<TrasanctionsBarChartLegendCard
					color={chartConfig.totalInvestments.color}
					title="Investimentos"
				/>
			</CardFooter>
		</Card>
	);
}
