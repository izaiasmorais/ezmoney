import { uppercaseFirstLetter } from "@/utils/uppercaseFirstLetter";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";
import { useInvoice } from "@/stores/invoice";

export function InvoicesStatusSelect() {
	const types = ["all", "paid", "pending", "overdue", "postponed"];
	const filterInvoices = useInvoice((store) => store.filterInvoices);

	return (
		<Select
			onValueChange={(e) => filterInvoices(e === "all" ? [] : ["status", e])}
		>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="Status" />
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
