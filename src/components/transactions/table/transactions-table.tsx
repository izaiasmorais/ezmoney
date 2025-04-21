"use client";
import {
	Table,
	TableHeader,
	TableRow,
	TableHead,
	TableBody,
	TableCell,
} from "@/components/ui/table";
import { flexRender, Table as TanstackTable } from "@tanstack/react-table";
import { transactionsTableColumns } from "./transactions-table-columns";
import { Transaction } from "@/@types/transaction";
import { TransactionsTableSkeleton } from "./transactions-table-skeleton";

interface TransactionsTableProps {
	table: TanstackTable<Transaction>;
	isLoadingGetTransactions: boolean;
	data: Transaction[];
}

export function TransactionsTable({
	isLoadingGetTransactions,
	data,
	table,
}: TransactionsTableProps) {
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
				{!isLoadingGetTransactions &&
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

				{isLoadingGetTransactions && <TransactionsTableSkeleton />}

				{!isLoadingGetTransactions &&
					(!data ||
						data.length === 0 ||
						table.getRowModel().rows?.length === 0) && (
						<TableRow>
							<TableCell
								colSpan={transactionsTableColumns.length}
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
