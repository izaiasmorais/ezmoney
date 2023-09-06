import { GoalCard } from "./goal-card";
import { GoalsModal } from "./goals-modal";

export function GoalsBox() {
	return (
		<div>
			<div className="flex items-center justify-between">
				<h1 className="text-2xl font-medium flex items-center gap-2">Goals</h1>
				<GoalsModal />
			</div>

			<div className="flex gap-6 mt-6">
				<GoalCard />
				<GoalCard />
				<GoalCard />
				<GoalCard />
			</div>
		</div>
	);
}
