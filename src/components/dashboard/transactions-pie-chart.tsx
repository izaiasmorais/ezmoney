"use client";
import * as React from "react";
import { Label, Pie, PieChart } from "recharts";
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
import { useGetTransactions } from "@/hooks/transactions/use-get-transactions";
import { TransactionsChartSkeleton } from "./transactions-pie-chart-skeleton";

interface CustomChartConfig extends ChartConfig {
	[key: string]: {
		label: string;
		color?: string;
	};
}

const chartConfig: CustomChartConfig = {
	value: {
		label: "Valor",
	},
	Utilidades: {
		label: "Utilidades",
		color: "#faf5ff", // purple-50
	},
	Entretenimento: {
		label: "Entretenimento",
		color: "#f3e8ff", // purple-100
	},
	Transporte: {
		label: "Transporte",
		color: "#e9d5ff", // purple-200
	},
	Casa: {
		label: "Casa",
		color: "#d8b4fe", // purple-300
	},
	Saúde: {
		label: "Saúde",
		color: "#c084fc", // purple-400
	},
	Alimentação: {
		label: "Alimentação",
		color: "#a855f7", // purple-500
	},
	Moradia: {
		label: "Moradia",
		color: "#9333ea", // purple-600
	},
	Educação: {
		label: "Educação",
		color: "#7e22ce", // purple-700
	},
	Lazer: {
		label: "Lazer",
		color: "#6b21a8", // purple-800
	},
	Vestuário: {
		label: "Vestuário",
		color: "#581c87", // purple-900
	},
	Outros: {
		label: "Outros",
		color: "#3b0764", // purple-950
	},
};

const orderedColors = Object.values(chartConfig)
	.filter((config) => config.color)
	.map((config) => config.color!)
	.reverse();

export function TransactionsPieChart() {
	const { expensesByCategory, totalExpenses } = useTransactions();
	const { isLoadingGetTransactions } = useGetTransactions();

	const sortedData = expensesByCategory
		.map((entry) => ({
			category: entry.category,
			value: entry.value,
		}))
		.sort((a, b) => b.value - a.value);

	const chartData = sortedData.map((entry, index) => ({
		category: entry.category,
		value: entry.value,
		fill: orderedColors[index] || "hsl(var(--chart-12))",
	}));

	if (isLoadingGetTransactions) {
		return <TransactionsChartSkeleton />;
	}

	return (
		<Card className="flex flex-col lg:col-span-1 shadow-none border-muted pb-0 h-full bg-transparent">
			<CardHeader className="pb-0">
				<div className="flex flex-col gap-1">
					<CardTitle className="text-lg">Gastos</CardTitle>
					<CardDescription>Março 2025</CardDescription>
				</div>
			</CardHeader>

			<CardContent className="flex-1 p-0 max-h-max">
				<ChartContainer
					config={chartConfig}
					className="mx-auto aspect-square max-h-90 p-0"
				>
					<PieChart>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent hideLabel />}
							formatter={(value, name, item) => (
								<>
									<div className="flex items-center gap-2">
										<div
											className="w-2.5 h-2.5 rounded-[2px]"
											style={{
												backgroundColor: item.payload.fill,
											}}
										/>

										<span>{name}</span>
									</div>

									<div className="font-bold">
										{value.toLocaleString("pt-BR", {
											style: "currency",
											currency: "BRL",
										})}
									</div>
								</>
							)}
						/>

						<Pie
							data={chartData}
							dataKey="value"
							nameKey="category"
							innerRadius={"60%"}
							strokeWidth={5}
						>
							<Label
								content={({ viewBox }) => {
									if (viewBox && "cx" in viewBox && "cy" in viewBox) {
										return (
											<text
												x={viewBox.cx}
												y={viewBox.cy}
												textAnchor="middle"
												dominantBaseline="middle"
											>
												<tspan
													x={viewBox.cx}
													y={viewBox.cy}
													className="fill-foreground text-3xl font-bold"
												>
													{totalExpenses.toLocaleString("pt-BR", {
														style: "currency",
														currency: "BRL",
													})}
												</tspan>

												<tspan
													x={viewBox.cx}
													y={(viewBox.cy || 0) + 24}
													className="fill-muted-foreground"
												>
													Total Despesas
												</tspan>
											</text>
										);
									}
								}}
							/>
						</Pie>
					</PieChart>
				</ChartContainer>
			</CardContent>

			<CardFooter className="flex-col gap-2 text-sm p-4 border-t border-dashed">
				<div className="grid grid-cols-2 2xl:grid-cols-4 gap-4 p-4">
					{chartData.map((entry, index) => (
						<div key={entry.category} className="flex items-center gap-2">
							<div
								className="w-4 h-4 rounded-full"
								style={{
									backgroundColor: orderedColors[index],
								}}
							/>

							<span className="text-sm">{entry.category}</span>
						</div>
					))}
				</div>
			</CardFooter>
		</Card>
	);
}
