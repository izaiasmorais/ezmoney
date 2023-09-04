import { Car, CreditCard, Sandwich, ShoppingCart } from "lucide-react";
import { BudgetSummaryCard } from "./budget-summary-card";

export function BudgetSummary() {
	return (
		<div className="flex items-center gap-6">
			<BudgetSummaryCard
				title="Food"
				icon={Sandwich}
				currentValue={0}
				totalValue={1000}
			/>
			<BudgetSummaryCard
				title="Transport"
				icon={Car}
				currentValue={0}
				totalValue={500}
			/>
			<BudgetSummaryCard
				title="Shopping"
				icon={ShoppingCart}
				currentValue={0}
				totalValue={1000}
			/>
			<BudgetSummaryCard
				title="Invoices"
				icon={CreditCard}
				currentValue={0}
				totalValue={1000}
			/>
		</div>
	);
}
