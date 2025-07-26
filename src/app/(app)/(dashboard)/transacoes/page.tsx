import { TransactionsSummary } from "@/components/transactions/summary/summary";
import { TransactionsTableContainer } from "@/components/transactions/table/container";

export default function Contas() {
	return (
		<div className="w-full space-y-6">
			<TransactionsSummary />

			<TransactionsTableContainer />
		</div>
	);
}
