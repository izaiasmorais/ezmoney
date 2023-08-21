import { uppercaseFirstLetter } from "@/utils/uppercaseFirstLetter";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";

export function TransactionsCategorySelect() {
	const categories = ["invoice", "deposit", "food", "transport", "shopping"];

	return (
		<Select>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="Category"/>
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
