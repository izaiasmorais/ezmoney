import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { TableCell, TableRow } from "../ui/table";

export function InvoicesTableSkeleton() {
	return (
		<TableRow>
			<TableCell>
				<Button variant="outline" size="xs" disabled>
					<Search className="h-4 w-4" />
					<span className="sr-only">Detalhes do pedido: </span>
				</Button>
			</TableCell>
			<TableCell className="font-mono text-xs font-medium">
				<Skeleton>
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
			<TableCell className="font-medium">1</TableCell>
			<TableCell>
				<Button variant="outline" size="xs">
					<MoreVertical className="h-4 w-4" />
				</Button>
			</TableCell>
		</TableRow>
	);
}
