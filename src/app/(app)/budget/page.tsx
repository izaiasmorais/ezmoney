import { GoalsBox } from "@/components/budget/goals-box";
import { GoalsModal } from "@/components/budget/goals-modal";

export default function Budget() {
	return (
		<main className="flex flex-col gap-6">
			<div className="flex flex-wrap gap-2 justify-between items-center">
				<h1 className="text-2xl font-medium flex items-center gap-2">Budget</h1>

				<GoalsModal />
			</div>

			<div className="flex flex-col gap-6">
				<GoalsBox />
			</div>
		</main>
	);
}
