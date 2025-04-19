import { cn } from "@/lib/utils";

interface SummaryCardProps {
	title: string;
	icon: React.ReactNode;
	description: string;
	backgroundColor: string;
	amount: string;
	className?: string;
}

export function SummaryCard({
	title,
	amount,
	icon,
	backgroundColor,
	className,
	description,
}: SummaryCardProps) {
	return (
		<div className={cn("p-3 sm:p-4 border rounded-lg", className)}>
			<div className="flex items-center gap-3">
				<div className={`rounded-full p-2 ${backgroundColor}`}>{icon}</div>
				<span className="text-sm font-medium">{title}</span>
			</div>

			<div className="mt-3">
				<p className="text-xs text-muted-foreground mt-1">{description}</p>
				<p className="text-xl sm:text-2xl font-semibold">{amount}</p>
			</div>
		</div>
	);
}
