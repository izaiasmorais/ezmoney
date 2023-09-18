import { ReactNode } from "react";
import { Card } from "../ui/card";
import { formatCurrency } from "@/utils/formatCurrency";
import { cn } from "@/lib/utils";

interface SummaryCardProps {
	title: string;
	value: number;
	icon: ReactNode;
	description: string;
}

export function SummaryCard({
	value,
	description,
	icon,
	title,
}: SummaryCardProps) {
	return (
		<Card className="p-4 md:p-6">
			<div className="flex justify-between items-center">
				<span className="text-sm font-semibold">{title}</span>
				{icon}
			</div>
			<h1 className="text-xl md:text-2xl font-bold mt-2">
				{formatCurrency(value)}
			</h1>
			<span className="text-slate-500 font-medium text-xs">{description}</span>
		</Card>
	);
}
