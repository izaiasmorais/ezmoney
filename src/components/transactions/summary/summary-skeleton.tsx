import { TransactionsSummaryCardSkeleton } from "./summary-card-skeleton";

export function TransactionsSummarySkeleton() {
	return (
		<div className="w-full flex gap-4">
			<TransactionsSummaryCardSkeleton />
			<TransactionsSummaryCardSkeleton />
			<TransactionsSummaryCardSkeleton />
		</div>
	);
}
