import { formatToBRL } from "@/utils/format-to-brl";
import { ChevronRight, TrendingDown, TrendingUp } from "lucide-react";
import Link from "next/link";

interface SummaryCardProps {
	title: string;
	value: number;
}

export function SummaryCard({ title, value }: SummaryCardProps) {
	return (
		<div className="rounded-md p-6 border border-muted gap-4 flex flex-col">
			<div className="flex items-center justify-between">
				<span className="font-medium text-accent-foreground">{title}</span>

				<Link href={"/transacoes"}>
					<ChevronRight size={18} />
				</Link>
			</div>

			<strong className="text-3xl leading-tight">{formatToBRL(value)}</strong>

			<span className="text-sm flex items-center gap-2">
				{title !== "Entradas" && (
					<div className="flex items-center justify-between rounded-full p-1 bg-green-50">
						<TrendingUp size={14} className="text-green-600" />
					</div>
				)}

				{title === "Entradas" && (
					<div className="flex items-center justify-between rounded-full p-1 bg-red-50">
						<TrendingDown size={14} className="text-red-600" />
					</div>
				)}

				<div className="flex items-center gap-1">
					{title === "Entradas" && <strong>-12.74%</strong>}
					{title === "Saídas" && <strong>+4.1%</strong>}
					{title === "Investimentos" && <strong>+2.5%</strong>}
					<span className="text-muted-foreground">que o mês passado</span>
				</div>
			</span>
		</div>
	);
}
