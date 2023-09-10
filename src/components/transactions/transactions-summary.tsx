import { Car, CreditCard, Sandwich, ShoppingCart } from "lucide-react";
import { TransactionsSummaryCard } from "./transactions-summary-card";

export function TransactionsSummary() {
	return (
		<div className="flex items-center gap-6">
			<TransactionsSummaryCard
				title="Food"
				icon={Sandwich}
				currentValue={0}
				totalValue={1000}
			/>
			<TransactionsSummaryCard
				title="Transport"
				icon={Car}
				currentValue={0}
				totalValue={500}
			/>
			<TransactionsSummaryCard
				title="Shopping"
				icon={ShoppingCart}
				currentValue={0}
				totalValue={1000}
			/>
			<TransactionsSummaryCard
				title="Invoices"
				icon={CreditCard}
				currentValue={0}
				totalValue={1000}
			/>
		</div>
	);
}
