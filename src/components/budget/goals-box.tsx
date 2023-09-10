import { GoalCard } from "./goal-card";

export function GoalsBox() {
	return (
		<div className="flex gap-6">
			<GoalCard />
			<GoalCard />
			<GoalCard />
			<GoalCard />
		</div>
	);
}
