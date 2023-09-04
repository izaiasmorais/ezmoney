import { Card } from "../ui/card";
import { ElementType } from "react";
import { formatCurrency } from "@/utils/formatCurrency";

interface BudgetSummaryCardProps {
	title: string;
	icon: ElementType;
	currentValue: number;
	totalValue: number;
}

export function BudgetSummaryCard({
	title,
	icon: Icon,
	currentValue,
	totalValue,
}: BudgetSummaryCardProps) {
	return (
		<Card className="flex-1 p-6 flex gap-3">
			<div
				className="w-16 h-16 flex items-center justify-center rounded-md
				bg-slate-50 text-slate-500 dark:bg-slate-700 dark:text-slate-50"
			>
				<Icon className="w-7 h-7" />
			</div>

			<div className="flex-1 space-y-1">
				<span>{title}</span>

				<div className="flex items-center">
					<span className="text-sm font-semibold">
						{formatCurrency(currentValue)}
					</span>
					<span className="mx-1">/</span>
					<span className="text-sm text-slate-700 dark:text-slate-100">
						{formatCurrency(totalValue)}
					</span>
				</div>

				<div className="bg-slate-50 dark:bg-slate-700 rounded-full h-2">
					<div className="bg-slate-500 dark:bg-slate-50 w-1/3 rounded-full h-2" />
				</div>
			</div>
		</Card>
	);
}
