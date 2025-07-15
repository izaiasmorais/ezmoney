import { Badge } from "@/components/ui/badge";

export function InvoiceCategory({ children }: { children: React.ReactNode }) {
	return (
		<Badge className="bg-dark-border py-1 px-4 rounded-full text-foreground">
			{children}
		</Badge>
	);
}
