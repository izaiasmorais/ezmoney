import { Switch } from "@/components/ui/switch";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import type { Installment } from "@/hooks/invoices/use-get-invoices-installments";
import { formatFromNow } from "@/utils/form-from-now";
import { formatCurrency } from "@/utils/format-currency";
import { InvoiceStatus } from "../table/status";
import { InvoiceInstallmentsTableSkeleton } from "./invoice-installments-table-skeleton";

interface InvoiceInstallmentsTableProps {
	installments: Installment[];
	isLoadingGetInvoiceInstallments: boolean;
}

export function InvoiceInstallmentsTable({
	installments,
	isLoadingGetInvoiceInstallments,
}: InvoiceInstallmentsTableProps) {
	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead className="min-w-[100px]">Parcela</TableHead>
					<TableHead className="min-w-[100px]">Valor</TableHead>
					<TableHead className="min-w-[100px]">Data de Vencimento</TableHead>
					<TableHead className="min-w-[100px]">Status</TableHead>
					<TableHead className="min-w-[100px]">Paga</TableHead>
				</TableRow>
			</TableHeader>

			<TableBody>
				{isLoadingGetInvoiceInstallments && (
					<InvoiceInstallmentsTableSkeleton />
				)}

				{!isLoadingGetInvoiceInstallments &&
					installments.map((item, index) => (
						<TableRow key={item.id} className="!h-12">
							<TableCell>{index + 1}</TableCell>

							<TableCell>{formatCurrency(item.unitValue)}</TableCell>

							<TableCell>
								<div className="flex flex-col gap-1">
									{formatFromNow(item.dueDate).date}
									<span className="text-xs text-zinc-500">
										{formatFromNow(item.dueDate).due}
									</span>
								</div>
							</TableCell>

							<TableCell>
								<InvoiceStatus status={item.status} />
							</TableCell>

							<TableCell>
								<Switch
									className="cursor-pointer"
									checked={item.status === "PAID"}
									onCheckedChange={() => {}}
									disabled
								/>
							</TableCell>
						</TableRow>
					))}
			</TableBody>
		</Table>
	);
}
