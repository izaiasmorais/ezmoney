import { ElementType } from "react";
import { Card } from "../ui/card";
import { formatCurrency } from "@/utils/formatCurrency";

interface InvoicesSummaryCardProps {
	title: string;
	invoices: number;
	icon: ElementType;
	value: number;
}

export function InvoicesSummaryCard({
	icon: Icon,
	invoices,
	value,
	title,
}: InvoicesSummaryCardProps) {
	const color =
		title === "Total"
			? "text-blue-700"
			: title === "Paid"
			? "text-green-700"
			: title === "Pending"
			? "text-yellow-700"
			: title === "Overdue"
			? "text-red-700"
			: "text-purple-700";

	return (
		<Card className="p-6 flex-1 flex gap-6 items-center text-sm">
			<div
				className="w-12 h-12 rounded-full flex items-center	justify-center
				bg-slate-50 text-slate-950	dark:bg-slate-700 dark:text-slate-50"
			>
				<Icon size={24} />
			</div>

			<div className="flex flex-col gap-1">
				<strong className="font-semibold text-base">{title}</strong>
				<p className="text-slate-400 font-medium">{invoices} invoices</p>
				<strong className={`font-semibold`}>{formatCurrency(value)}</strong>
			</div>
		</Card>
	);
}
