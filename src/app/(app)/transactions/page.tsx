import { TransactionsBox } from "@/components/transactions/transactions-box";
import { TransactionsModal } from "@/components/transactions/transactions-modal";

export default function Transaction() {
	return (
		<main className="flex flex-col gap-3">
			<div className="flex flex-wrap gap-2 justify-between items-center">
				<h1 className="text-2xl font-medium flex items-center gap-2">
					Transactions
				</h1>

				<TransactionsModal />
			</div>

			<TransactionsBox />
		</main>
	);
}
