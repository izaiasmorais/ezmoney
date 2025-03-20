import { cn } from "@/lib/utils";

interface InvoiceSummaryItemProps {
	title: string;
	amount: string;
	icon: React.ReactNode;
	count: number;
	colorClass: string;
	className?: string;
}

export function InvoicesSummaryItem({
	title,
	amount,
	icon,
	colorClass,
	className,
	count,
}: InvoiceSummaryItemProps) {
	return (
		<div className={cn("min-w-[300px] p-4", className)}>
			<div className="flex items-center gap-3">
				<div className={`rounded-full p-2 ${colorClass}`}>{icon}</div>
				<span className="text-sm font-medium">
					{title === "Total" && "Total"}
					{title === "Paid" && "Pago"}
					{title === "Overdue" && "Atrasado"}
					{title === "Pending" && "Pendente"}
					{title === "Draft" && "Rascunho"}
				</span>
			</div>

			<div className="mt-3">
				<p className="text-xs text-muted-foreground mt-1">{count} Contas</p>
				<p className="text-2xl font-semibold">{amount}</p>
			</div>
		</div>
	);
}
