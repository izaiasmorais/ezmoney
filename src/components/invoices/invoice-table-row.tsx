import { MoreVertical, Search } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { TableCell, TableRow } from "../ui/table";
import { InvoiceDetails } from "./invoice-details";
import { InvoiceStatus } from "./invoice-status";
import { IInvoice } from "@/api/get-invoices";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export interface InvoiceTableRowProps {
	invoice: IInvoice;
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
				{invoice.invoiceId}
			</TableCell>
			<TableCell className="font-medium">{invoice.invoiceName}</TableCell>
			<TableCell className="text-muted-foreground">
				{format(new Date(invoice.createdAt), "dd/MM/yyyy", { locale: ptBR })}
			</TableCell>
			<TableCell className="text-muted-foreground">
				{format(new Date(invoice.dueDate), "dd/MM/yyyy", { locale: ptBR })}
			</TableCell>
			<TableCell>
				<InvoiceStatus status={invoice.status} />
			</TableCell>
			<TableCell className="font-medium">
				{Number(invoice.value).toLocaleString("pt-BR", {
					style: "currency",
					currency: "BRL",
				})}
			</TableCell>
			<TableCell className="font-medium">{invoice.installments}</TableCell>
			<TableCell>
				<Button variant="outline" size="xs">
					<MoreVertical className="h-4 w-4" />
				</Button>
			</TableCell>
		</TableRow>
	);
}
