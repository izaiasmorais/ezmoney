"use client";
import { LoaderCircle } from "lucide-react";
import { Pie, PieChart } from "recharts";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	type ChartConfig,
	ChartContainer,
	ChartLegend,
	ChartLegendContent,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
import { useGetExpensesByCategorie } from "@/hooks/categories/use-get-expenses-by-category";

export const description = "Gráfico de pizza mostrando gastos por categoria";

export function RoundedPieChart() {
	const { expensesByCategorie, isLoadingGetExpensesByCategorie } =
		useGetExpensesByCategorie();

	if (isLoadingGetExpensesByCategorie || !expensesByCategorie) {
		return (
			<Card className="flex flex-col">
				<CardHeader className="items-center pb-0">
					<CardTitle>Gastos por Categoria</CardTitle>
					<CardDescription>Carregando dados...</CardDescription>
				</CardHeader>

				<CardContent className="flex-1 pb-0">
					<div className="mx-auto aspect-square max-h-[300px] flex items-center justify-center">
						<LoaderCircle className="animate-spin" />
					</div>
				</CardContent>
			</Card>
		);
	}

	const chartData = expensesByCategorie.map((item) => ({
		category: item.category,
		total: item.value,
		fill: item.color,
	}));

	const chartConfig = expensesByCategorie.reduce(
		(config, item) => {
			config[item.category] = {
				label: item.category,
				color: item.color,
			};
			return config;
		},
		{
			total: {
				label: "Total Gasto",
			},
		} as ChartConfig
	);

	return (
		<Card className="flex flex-col">
			<CardHeader className="items-center pb-0">
				<CardTitle>Gastos por Categoria</CardTitle>
				<CardDescription>Gastos do mês atual</CardDescription>
			</CardHeader>

			<CardContent className="flex-1 pb-0">
				<ChartContainer
					config={chartConfig}
					className="mx-auto aspect-square max-h-[300px]"
				>
					<PieChart>
						<ChartTooltip
							cursor={false}
							content={
								<ChartTooltipContent
									nameKey="category"
									labelKey="category"
									formatter={(value) =>
										`R$ ${Number(value).toLocaleString("pt-BR", {
											minimumFractionDigits: 2,
										})}`
									}
								/>
							}
						/>

						<Pie
							data={chartData}
							dataKey="total"
							nameKey="category"
							innerRadius={30}
							strokeWidth={2}
							radius={10}
							cornerRadius={8}
							paddingAngle={4}
						/>

						<ChartLegend
							content={<ChartLegendContent nameKey="category" />}
							className="-translate-y-2 flex-wrap gap-2 *:basis-1/5 *:justify-center"
						/>
					</PieChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
