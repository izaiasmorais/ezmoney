import { InvoicesSummaryCard } from "./summary-card";

export function InvoicesSummary() {
	return (
		<div className="w-full flex gap-4">
			<InvoicesSummaryCard />
			<InvoicesSummaryCard />
			<InvoicesSummaryCard />
			<InvoicesSummaryCard />
		</div>
	);
}
