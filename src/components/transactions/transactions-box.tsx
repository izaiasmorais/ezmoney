import { Card } from "../ui/card";
import { TransactionsTypeSelect } from "./transactions-type-select";
import { TransactionsTable } from "./transactions-table";
import { TransactionsDataPicker } from "./transactions-data-picker";
import { Input } from "../ui/input";

export function TransactionsBox() {
	return (
		<Card>
			<div className="p-6 flex flex-wrap gap-6 items-center justify-between">
				<div className="flex flex-wrap gap-6">
					<TransactionsTypeSelect />
					<TransactionsDataPicker />
				</div>
				<Input placeholder="Search transactions..." className="max-w-[500px]" />
			</div>
			<TransactionsTable />
		</Card>
	);
}
