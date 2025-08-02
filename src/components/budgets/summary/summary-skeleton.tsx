import { BudgetsSummaryCardSkeleton } from "./summary-card-skeleton";

export function BudgetsSummarySkeleton() {
	return (
		<div className="w-full flex gap-4">
			<BudgetsSummaryCardSkeleton />
			<BudgetsSummaryCardSkeleton />
			<BudgetsSummaryCardSkeleton />
			<BudgetsSummaryCardSkeleton />
		</div>
	);
}
