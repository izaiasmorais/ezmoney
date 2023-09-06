import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";

export function GoalsModal() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="flex items-center justify-center gap-2 max-w-max w-[200px]">
					<Plus size={20} />
					New goal
				</Button>
			</DialogTrigger>

			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>New Goal</DialogTitle>
				</DialogHeader>
				
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="name" className="text-right">
							Name
						</Label>
						<Input
							id="name"
							type="text"
							placeholder="New car"
							className="col-span-3"
						/>
					</div>

					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="value" className="text-right">
							Value
						</Label>
						<Input
							id="value"
							placeholder="$ 1.000"
							type="number"
							className="col-span-3"
						/>
					</div>

					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="value" className="text-right">
							Store
						</Label>
						<Input
							id="store"
							type="text"
							placeholder="Amazon"
							className="col-span-3"
						/>
					</div>
				</div>
				<DialogFooter className="flex items-center">
					<Button type="button" variant="destructive">
						Cancel
					</Button>
					<Button type="submit">Confirm</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
