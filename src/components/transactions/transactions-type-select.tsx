import { uppercaseFirstLetter } from "@/utils/uppercaseFirstLetter";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";

export function TransactionsTypeSelect() {
	const types = ["Deposit", "Withdrawals"];

	return (
		<Select>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="Type" />
			</SelectTrigger>

			<SelectContent>
				{types.map((type) => (
					<SelectItem key={type.toLowerCase()} value={type.toLowerCase()}>
						{uppercaseFirstLetter(type)}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
}
