import { invoices } from "@/mocks/invoices";
import {
	Table,
	TableBody,
	TableHead,
	TableHeader,
	TableRow,
} from "../ui/table";
import { InvoiceTableRow } from "./invoice-table-row";

export function InvoiceTable() {
	return (
		<div className="rounded-md border">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[64px]"></TableHead>
						<TableHead className="w-[200px]">Identificador</TableHead>
						<TableHead>Conta</TableHead>
						<TableHead className="w-[180px]">Criação</TableHead>
						<TableHead className="w-[180px]">Validade</TableHead>
						<TableHead className="w-[140px]">Status</TableHead>
						<TableHead className="w-[140px]">Valor</TableHead>
						<TableHead className="w-[140px]">Parcelas</TableHead>
						<TableHead className="w-[164px]"></TableHead>
					</TableRow>
				</TableHeader>

				<TableBody>
					{invoices.map((invoice) => {
						return <InvoiceTableRow key={invoice.id} invoice={invoice}/>;
					})}
				</TableBody>
			</Table>
		</div>
	);
}
