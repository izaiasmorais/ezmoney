import { ReactNode } from "react";
import { Card } from "../ui/card";

interface SummaryCardProps {
	title: string;
	value: string;
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
		<Card className="p-6">
			<div className="flex justify-between items-center">
				<span className="text-sm font-semibold">{title}</span>
				{icon}
			</div>
			<h1 className="text-2xl font-bold mt-2">{value}</h1>
			<span className="text-slate-500 font-medium text-xs">{description}</span>
		</Card>
	);
}
