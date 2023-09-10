import { GoalCard } from "./goal-card";

export function GoalsBox() {
	return (
		<div className="flex flex-wrap gap-2 md:gap-6">
			<GoalCard />
			<GoalCard />
			<GoalCard />
			<GoalCard />
		</div>
	);
}
