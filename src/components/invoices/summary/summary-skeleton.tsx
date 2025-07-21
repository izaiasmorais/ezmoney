import { InvoicesSummaryCardSkeleton } from "./summary-card-skeleton";

export function InvoicesSummarySkeleton() {
	return (
		<div className="w-full flex gap-4">
			<InvoicesSummaryCardSkeleton />
			<InvoicesSummaryCardSkeleton />
			<InvoicesSummaryCardSkeleton />
			<InvoicesSummaryCardSkeleton />	
		</div>
	);
}
