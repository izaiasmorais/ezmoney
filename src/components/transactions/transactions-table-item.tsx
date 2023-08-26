import { ITransaction } from "@/@types/transaction";
import { uppercaseFirstLetter } from "@/utils/uppercaseFirstLetter";
import { Banknote } from "lucide-react";
import { TableRow, TableCell } from "../ui/table";
import { Badge } from "../ui/badge";
import { TransactionTableOptionsButton } from "./transactions-table-option-button";

interface ITransactionTableItemProps {
	transaction: ITransaction;
}

export function TransactionTableItem({
	transaction,
}: ITransactionTableItemProps) {
	return (
		<TableRow className="cursor-pointer border-b-[1px] border-slate-50 dark:border-slate-900">
			<TableCell className="font-medium flex items-center gap-3">
				<div
					className="w-10 h-10 bg-slate-100 dark:bg-slate-800 flex items-center
						justify-center rounded-md"
				>
					<Banknote size={24} />
				</div>
				{transaction.name}
			</TableCell>
			<TableCell className="!max-w-[190px]">
				<div className="w-[100px]">$ {transaction.value}</div>
			</TableCell>
			<TableCell>{String(transaction.createdAt)}</TableCell>
			<TableCell>{transaction.installment}</TableCell>
			<TableCell>
				<Badge
					variant="outline"
					className={`${
						transaction.type === "expense"
							? "bg-red-100 text-red-950"
							: "bg-green-100 text-green-950"
					} border-none`}
				>
					{uppercaseFirstLetter(transaction.type)}
				</Badge>
			</TableCell>
			<TableCell>
				<TransactionTableOptionsButton />
			</TableCell>
		</TableRow>
	);
}
