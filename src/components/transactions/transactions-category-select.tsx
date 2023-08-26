import { uppercaseFirstLetter } from "@/utils/uppercaseFirstLetter";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";
import { useTransaction } from "@/stores/transaction";

export function TransactionsCategorySelect() {
	const categories = [
		"all",
		"invoice",
		"deposit",
		"food",
		"transport",
		"shopping",
	];
	const filterTransactions = useTransaction(
		(store) => store.filterTransactions
	);

	return (
		<Select
			onValueChange={(e) =>
				filterTransactions(e === "all" ? [] : ["category", e])
			}
		>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="Category" />
			</SelectTrigger>

			<SelectContent>
				{categories.map((category) => (
					<SelectItem key={category} value={category}>
						{uppercaseFirstLetter(category)}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
}
