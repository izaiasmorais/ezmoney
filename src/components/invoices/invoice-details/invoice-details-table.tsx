import { Invoice } from "@/@types/invoice";
import {
	TableHeader,
	TableRow,
	TableHead,
	TableBody,
	TableCell,
	Table,
} from "@/components/ui/table";
import { formatToBRL } from "@/utils/format-to-brl";

interface InvoiceDetailsTableProps {
	invoice: Invoice;
}

export function InvoiceDetailsTable({ invoice }: InvoiceDetailsTableProps) {
	return (
		<Table>
			<TableHeader className="bg-sidebar rounded-t-lg overflow-hidden">
				<TableRow className="border-none hover:bg-sidebar">
					<TableHead className="first:rounded-tl-md first:rounded-bl-md p-4">
						Parcela
					</TableHead>
					<TableHead>Valor</TableHead>
					<TableHead className="last:rounded-tr-md last:rounded-br-md">
						Data de Vencimento
					</TableHead>
				</TableRow>
			</TableHeader>

			<TableBody>
				{Array.from({ length: invoice.installments }).map((_, i) => {
					const baseDate = new Date(invoice.dueDate);

					const dueDate = new Date(baseDate);

					dueDate.setDate(baseDate.getDate() + i * 30);

					const formattedDueDate = dueDate.toLocaleDateString("pt-BR");

					return (
						<TableRow key={i} className="border-muted hover:bg-white">
							<TableCell className="p-4 ">{i + 1}</TableCell>
							<TableCell>{formatToBRL(invoice.unitValue)}</TableCell>
							<TableCell>{formattedDueDate}</TableCell>
						</TableRow>
					);
				})}
			</TableBody>
		</Table>
	);
}
