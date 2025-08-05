"use client";
import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";
import { Badge } from "@/components/ui/badge";
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

export const description = "Gráfico de pizza mostrando gastos por categoria";

const expensesByCategorie = [
	{ category: "alimentacao", total: 850.5, fill: "#FF6B6B" }, // Vermelho coral
	{ category: "transporte", total: 420.75, fill: "#4ECDC4" }, // Turquesa
	{ category: "saude", total: 320.3, fill: "#45B7D1" }, // Azul céu
	{ category: "lazer", total: 280.9, fill: "#96CEB4" }, // Verde menta
	{ category: "moradia", total: 1200.0, fill: "#FFEAA7" }, // Amarelo suave
	{ category: "educacao", total: 350.0, fill: "#DDA0DD" }, // Roxo claro
	{ category: "vestuario", total: 180.45, fill: "#FFB347" }, // Laranja pêssego
	{ category: "tecnologia", total: 240.8, fill: "#87CEEB" }, // Azul claro
	{ category: "servicos", total: 195.6, fill: "#F0E68C" }, // Khaki
	{ category: "viagem", total: 450.0, fill: "#FF69B4" }, // Rosa pink
	{ category: "outros", total: 150.25, fill: "#CD853F" }, // Marrom Peru
];

const chartConfig = {
	total: {
		label: "Total Gasto",
	},
	alimentacao: {
		label: "Alimentação",
		color: "#FF6B6B",
	},
	transporte: {
		label: "Transporte",
		color: "#4ECDC4",
	},
	saude: {
		label: "Saúde",
		color: "#45B7D1",
	},
	lazer: {
		label: "Lazer",
		color: "#96CEB4",
	},
	moradia: {
		label: "Moradia",
		color: "#FFEAA7",
	},
	educacao: {
		label: "Educação",
		color: "#DDA0DD",
	},
	vestuario: {
		label: "Vestuário",
		color: "#FFB347",
	},
	tecnologia: {
		label: "Tecnologia",
		color: "#87CEEB",
	},
	servicos: {
		label: "Serviços",
		color: "#F0E68C",
	},
	viagem: {
		label: "Viagem",
		color: "#FF69B4",
	},
	outros: {
		label: "Outros",
		color: "#CD853F",
	},
} satisfies ChartConfig;

export function RoundedPieChart() {
	const totalExpenses = expensesByCategorie.reduce(
		(sum, item) => sum + item.total,
		0
	);

	return (
		<Card className="flex flex-col">
			<CardHeader className="items-center pb-0">
				<CardTitle>
					Gastos por Categoria
					<Badge
						variant="outline"
						className="text-green-500 bg-green-500/10 border-none ml-2"
					>
						<TrendingUp className="h-4 w-4" />
						<span>
							R${" "}
							{totalExpenses.toLocaleString("pt-BR", {
								minimumFractionDigits: 2,
							})}
						</span>
					</Badge>
				</CardTitle>
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
							data={expensesByCategorie}
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
