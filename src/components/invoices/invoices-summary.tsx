import { InvoicesSummaryCard } from "./invoices-summary-card";

export function InvoicesSummary() {
	return (
		<div className="flex flex-wrap w-full gap-6">
			<InvoicesSummaryCard />
			<InvoicesSummaryCard />
			<InvoicesSummaryCard />
			<InvoicesSummaryCard />
			<InvoicesSummaryCard />
		</div>
	);
}
