import { MoreVertical, Search } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { TableCell, TableRow } from "../ui/table";
import { InvoiceDetails } from "./invoice-details";
import { InvoiceStatus } from "./invoice-status";

export interface InvoiceTableRowProps {
	invoice: {
		id: string;
		name: string;
		createAt: string;
		dueDate: string;
		status: "pending" | "overdue" | "paid" | "postponed";
		parcels: number;
		value: number;
	};
}

export function InvoiceTableRow({ invoice }: InvoiceTableRowProps) {
	return (
		<TableRow>
			<TableCell>
				<Dialog>
					<DialogTrigger asChild>
						<Button variant="outline" size="xs">
							<Search className="h-4 w-4" />
							<span className="sr-only">Detalhes do pedido: </span>
						</Button>
					</DialogTrigger>
					<InvoiceDetails />
				</Dialog>
			</TableCell>
			<TableCell className="font-mono text-xs font-medium">
				{invoice.id}
			</TableCell>
			<TableCell className="font-medium">{invoice.name}</TableCell>
			<TableCell className="text-muted-foreground">
				{invoice.createAt}
			</TableCell>
			<TableCell className="text-muted-foreground">{invoice.dueDate}</TableCell>
			<TableCell>
				<InvoiceStatus status={invoice.status} />
			</TableCell>
			<TableCell className="font-medium">
				{invoice.value.toLocaleString("pt-BR", {
					style: "currency",
					currency: "BRL",
				})}
			</TableCell>
			<TableCell className="font-medium">1</TableCell>
			<TableCell>
				<Button variant="outline" size="xs">
					<MoreVertical className="h-4 w-4" />
				</Button>
			</TableCell>
		</TableRow>
	);
}
