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
import { DatePicker } from "../global/date-picker";
import { TransactionsCategorySelect } from "./transactions-category-select";

export function TransactionsModal() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="flex items-center justify-center gap-2 max-w-max w-[200px]">
					<Plus size={20} />
					New transaction
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>New Transaction</DialogTitle>
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="name" className="text-right">
							Name
						</Label>
						<Input
							id="name"
							type="text"
							placeholder="Pay John"
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
						<Label htmlFor="date" className="text-right">
							Date
						</Label>
						<div className="col-span-3">
							<DatePicker />
						</div>
					</div>

					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="installment" className="text-right">
							Installment
						</Label>
						<Input
							id="installment"
							placeholder="1"
							type="number"
							className="col-span-3"
						/>
					</div>

					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="category" className="text-right">
							Category
						</Label>
						<div className="col-span-3">
							<TransactionsCategorySelect />
						</div>
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
