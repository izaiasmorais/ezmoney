import { Car, CreditCard, Sandwich, ShoppingCart } from "lucide-react";
import { TransactionsSummaryCard } from "./transactions-summary-card";

export function TransactionsSummary() {
	return (
		<section
			id="transactions-summary"
			className="items-center gap-4 md:gap-6 grid xl:grid-cols-4 md:grid-cols-2"
		>
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
		</section>
	);
}
