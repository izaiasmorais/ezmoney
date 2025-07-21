import { Badge } from "@/components/ui/badge";

interface InvoiceCategoryProps {
	label: string;
	color: string;
}

export function InvoiceCategory({ label, color }: InvoiceCategoryProps) {
	return (
		<Badge
			className={`bg-card dark:bg-neutral-800/80 text-foreground py-1 px-4 rounded-full  flex items-center gap-2`}
		>
			<div
				className="w-2 h-2 rounded-full"
				style={{ backgroundColor: color }}
			/>
			{label}
		</Badge>
	);
}
