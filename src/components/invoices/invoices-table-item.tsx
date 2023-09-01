import { IInvoice } from "@/@types/invoice";
import { uppercaseFirstLetter } from "@/utils/uppercaseFirstLetter";
import { TableRow, TableCell } from "../ui/table";
import { Badge } from "../ui/badge";
import { OptionsButton } from "../global/option-button";

interface IInvoiceTableItemProps {
	invoice: IInvoice;
}

export function InvoiceTableItem({ invoice }: IInvoiceTableItemProps) {
	return (
		<TableRow className="cursor-pointer border-b-[1px] border-slate-50 dark:border-slate-900">
			<TableCell className="font-medium">{invoice.name}</TableCell>
			<TableCell className="!max-w-[190px]">
				<div className="w-[100px]">R$ {invoice.value}</div>
			</TableCell>
			<TableCell>{String(invoice.createdAt)}</TableCell>
			<TableCell>{String(invoice.dueDate)}</TableCell>
			<TableCell>{invoice.installments}</TableCell>
			<TableCell>
				<Badge
					variant="outline"
					className={`${
						invoice.status === "due"
							? "bg-red-100 text-red-700"
							: invoice.status === "paid"
							? "bg-green-100 text-green-700"
							: invoice.status === "pending"
							? "bg-yellow-100 text-yellow-700"
							: "bg-purple-100 text-purple-700"
					} border-none`}
				>
					{uppercaseFirstLetter(invoice.status)}
				</Badge>
			</TableCell>
			<TableCell>
				<OptionsButton />
			</TableCell>
		</TableRow>
	);
}
