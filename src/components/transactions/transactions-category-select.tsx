import { uppercaseFirstLetter } from "@/utils/uppercaseFirstLetter";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";

export function TransactionsCategorySelect() {
	const categories = ["Invoice", "Food", "Transport", "Shopping"];

	return (
		<Select defaultValue="invoice">
			<SelectTrigger>
				<SelectValue />
			</SelectTrigger>

			<SelectContent>
				{categories.map((category) => (
					<SelectItem
						key={category.toLowerCase()}
						value={category.toLowerCase()}
					>
						{uppercaseFirstLetter(category)}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
}
