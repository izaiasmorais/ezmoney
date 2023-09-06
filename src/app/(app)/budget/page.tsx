import { BudgetSummary } from "@/components/budget/budget-summary";
import { GoalsBox } from "@/components/budget/goals-box";

export default function Budget() {
	return (
		<main className="flex flex-col gap-6">
			<div className="flex flex-wrap gap-2 justify-between items-center">
				<h1 className="text-2xl font-medium flex items-center gap-2">Budget</h1>

				<div></div>
			</div>

			<div className="flex flex-col gap-6">
				<BudgetSummary />
				<GoalsBox />
			</div>
		</main>
	);
}
