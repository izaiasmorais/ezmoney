import { TransactionsSummaryCard } from "./transactions-summary-card";

export function TransactionsSummary() {
	return (
		<div className="w-full flex gap-4">
			<TransactionsSummaryCard />
			<TransactionsSummaryCard />
			<TransactionsSummaryCard />
			<TransactionsSummaryCard />
		</div>
	);
}
