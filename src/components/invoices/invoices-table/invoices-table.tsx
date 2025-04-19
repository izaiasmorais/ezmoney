import {
	Table,
	TableHeader,
	TableRow,
	TableHead,
	TableBody,
	TableCell,
} from "@/components/ui/table";
import { flexRender, Table as TableType } from "@tanstack/react-table";
import { invoicesTableColumns } from "./invoices-table-columns";
import { InvoicesTableSkeleton } from "./invoices-table-skeleton";
import { Invoice } from "@/@types/invoice";

interface InvoicesTableProps {
	table: TableType<Invoice>;
	isLoadingGetInvoices: boolean;
	data: Invoice[];
}

export function InvoicesTable({
	table,
	isLoadingGetInvoices,
	data,
}: InvoicesTableProps) {
	return (
		<Table className="overflow-x-scroll">
			<TableHeader>
				{table.getHeaderGroups().map((headerGroup) => (
					<TableRow
						key={headerGroup.id}
						className="border-none overflow-hidden"
					>
						{headerGroup.headers.map((header) => {
							return (
								<TableHead
									key={header.id}
									className="bg-slate-50 dark:bg-sidebar first:rounded-l-lg last:rounded-r-lg"
								>
									{header.isPlaceholder
										? null
										: flexRender(
												header.column.columnDef.header,
												header.getContext()
										  )}
								</TableHead>
							);
						})}
					</TableRow>
				))}
			</TableHeader>

			<TableBody>
				{isLoadingGetInvoices && <InvoicesTableSkeleton />}

				{!isLoadingGetInvoices &&
					data &&
					data.length > 0 &&
					table.getRowModel().rows?.length > 0 &&
					table.getRowModel().rows.map((row) => (
						<TableRow
							key={row.id}
							data-state={row.getIsSelected() && "selected"}
							className="border-none"
						>
							{row.getVisibleCells().map((cell) => (
								<TableCell key={cell.id}>
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</TableCell>
							))}
						</TableRow>
					))}

				{!isLoadingGetInvoices &&
					(!data ||
						data.length === 0 ||
						table.getRowModel().rows?.length === 0) && (
						<TableRow>
							<TableCell
								colSpan={invoicesTableColumns.length}
								className="h-24 text-center"
							>
								Sem resultados
							</TableCell>
						</TableRow>
					)}
			</TableBody>
		</Table>
	);
}
