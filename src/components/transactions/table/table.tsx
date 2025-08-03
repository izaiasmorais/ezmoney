import { flexRender, type Table as TableType } from "@tanstack/react-table";
import { TableEmpty } from "@/components/table/table-empty";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import type { Transaction } from "@/hooks/transactions/use-get-transactions";
import { TransactionsTableColumns } from "./columns";
import { TransactionTableSkeleton } from "./skeleton";

interface TransactionTableProps {
	table: TableType<Transaction>;
	isLoading: boolean;
	data: Transaction[];
	widths?: string[];
}

export function TransactionTable({
	table,
	isLoading,
	data,
	widths = [
		"min-w-[300px]",
		"min-w-[150px]",
		"min-w-[150px]",
		"min-w-[150px]",
		"min-w-[245px]",
		"min-w-[150px]",
		"min-w-[50px]",
	],
}: TransactionTableProps) {
	return (
		<Table>
			<TableHeader>
				{table.getHeaderGroups().map((headerGroup) => (
					<TableRow key={headerGroup.id}>
						{headerGroup.headers.map((header) => {
							return (
								<TableHead
									key={header.id}
									className={`h-5 ${widths[header.index] || "w-full"}`}
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
				{isLoading && <TransactionTableSkeleton />}

				{!isLoading &&
					data &&
					data.length > 0 &&
					table.getRowModel().rows?.length > 0 &&
					table.getRowModel().rows.map((row) => (
						<TableRow
							key={row.id}
							data-state={row.getIsSelected() && "selected"}
						>
							{row.getVisibleCells().map((cell) => (
								<TableCell key={cell.id}>
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</TableCell>
							))}
						</TableRow>
					))}

				{!isLoading &&
					(!data ||
						data.length === 0 ||
						table.getRowModel().rows?.length === 0) && (
						<TableRow>
							<TableCell
								colSpan={TransactionsTableColumns.length}
								className="h-24 text-center"
							>
								<TableEmpty
									message="Você não possui transações"
									description="Adicione uma transação para começar."
								/>
							</TableCell>
						</TableRow>
					)}
			</TableBody>
		</Table>
	);
}
