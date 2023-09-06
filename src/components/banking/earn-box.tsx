import { DatePicker } from "@/components/global/date-picker";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Minus, Plus } from "lucide-react";

export function EarnBox() {
	return (
		<Card className="p-6 flex flex-col gap-6 h-max">
			<h1 className="text-xl font-medium">Earn</h1>

			<div className="w-full flex items-center justify-between gap-6">
				<Minus className="border rounded-full p-1 w-8 h-8 cursor-pointer hover:brightness-90" />
				<div className="flex items-center gap-2">
					R$
					<Input className="w-[200px]" type="number" placeholder="999,99" />
				</div>
				<Plus className="border rounded-full p-1 w-8 h-8 cursor-pointer hover:brightness-90" />
			</div>

			<div className="grid grid-cols-2 gap-6 items-center">
				<DatePicker />

				<Button>Register</Button>
			</div>
		</Card>
	);
}
