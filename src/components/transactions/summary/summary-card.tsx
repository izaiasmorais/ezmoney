import { GeistMono } from "geist/font/mono";
import type { LucideIcon } from "lucide-react";
import { formatCurrency } from "@/utils/format-currency";

interface TransactionsSummaryCardProps {
	label: string;
	value: number;
	transactions: number;
	Icon: LucideIcon;
}

export function TransactionsSummaryCard({
	label,
	value,
	transactions,
	Icon,
}: TransactionsSummaryCardProps) {
	return (
		<div className="dark:bg-card border-border w-full p-6 rounded-md border flex flex-col gap-6">
			<div className="flex items-center gap-2">
				<Icon size={20} className="text-zinc-500" />

				<span className={`text-sm text-zinc-500 ${GeistMono.className}`}>
					{label}
				</span>
			</div>

			<div className="flex flex-col gap-2">
				<span className={`text-2xl font-semibold ${GeistMono.className}`}>
					{formatCurrency(value)}
				</span>

				<span className={`text-sm text-zinc-500 ${GeistMono.className}`}>
					{transactions} transações
				</span>
			</div>
		</div>
	);
}
