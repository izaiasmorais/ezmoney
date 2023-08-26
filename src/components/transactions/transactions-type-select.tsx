import { uppercaseFirstLetter } from "@/utils/uppercaseFirstLetter";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";
import { useTransaction } from "@/stores/transaction";

export function TransactionsTypeSelect() {
	const types = ["all", "expense", "income"];
	const filterTransactions = useTransaction(
		(store) => store.filterTransactions
	);

	return (
		<Select
			onValueChange={(e) => filterTransactions(e === "all" ? [] : ["type", e])}
		>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="Type" />
			</SelectTrigger>

			<SelectContent>
				{types.map((type) => (
					<SelectItem key={type} value={type}>
						{uppercaseFirstLetter(type)}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
}
