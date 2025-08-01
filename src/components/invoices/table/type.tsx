import { Badge } from "@/components/ui/badge";

interface InvoiceTypeProps {
	type: "FIXED" | "RECURRING" | "ONE_TIME";
}

export function InvoiceType({ type }: InvoiceTypeProps) {
	const typeLabel = {
		FIXED: "Fixo",
		RECURRING: "Recorrente",
		ONE_TIME: "Único",
	};

	return (
		<Badge className="rounded-full px-4 bg-card dark:bg-neutral-800/80 text-foreground">
			{typeLabel[type]}
		</Badge>
	);
}
