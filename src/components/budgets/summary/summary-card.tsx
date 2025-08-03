import { GeistMono } from "geist/font/mono";
import type { LucideIcon } from "lucide-react";
import { formatCurrency } from "@/utils/format-currency";

interface BudgetsSummaryCardProps {
	label: string;
	value: number;
	count: number;
	Icon: LucideIcon;
	singularDescription?: string;
	pluralDescription?: string;
	customDescription?: string;
}

export function BudgetsSummaryCard({
	label,
	value,
	count,
	Icon,
	singularDescription,
	pluralDescription,
	customDescription,
}: BudgetsSummaryCardProps) {
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
					{!customDescription &&
						`${count} ${count === 1 ? singularDescription : pluralDescription}`}

					{customDescription && customDescription}
				</span>
			</div>
		</div>
	);
}
