import { Banknote, Store } from "lucide-react";
import { Card } from "../ui/card";
import { OptionsButton } from "../global/option-button";

export function GoalCard() {
	return (
		<Card className="flex-1 flex flex-col p-2">
			<div className="w-full h-[200px] rounded-lg bg-slate-100 dark:bg-slate-800" />

			<div className="flex justify-between">
				<div className="p-4 flex flex-col gap-1">
					<h2 className="text-lg font-medium">Goal Name</h2>

					<div className="flex gap-2 items-center text-sm">
						<Banknote size={18} /> R$ 999,99
					</div>

					<div className="flex gap-2 items-center text-sm">
						<Store size={18} /> Amazon
					</div>
				</div>

				<div className="flex flex-col place-content-end">
					<OptionsButton />
				</div>
			</div>
		</Card>
	);
}
