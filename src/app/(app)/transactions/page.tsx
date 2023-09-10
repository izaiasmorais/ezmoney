import { TransactionsBox } from "@/components/transactions/transactions-box";
import { TransactionsModal } from "@/components/transactions/transactions-modal";
import { TransactionsSummary } from "@/components/transactions/transactions-summary";

export default function Transaction() {
	return (
		<main className="flex flex-col gap-6">
			<div className="flex flex-wrap gap-2 justify-between items-center">
				<h1 className="text-2xl font-medium flex items-center gap-2">
					Transactions
				</h1>

				<TransactionsModal />
			</div>

			<TransactionsSummary />
			<TransactionsBox />
		</main>
	);
}
