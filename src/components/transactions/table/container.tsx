"use client";
import {
	type ColumnFiltersState,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	type SortingState,
	useReactTable,
	type VisibilityState,
} from "@tanstack/react-table";
import { Filter } from "lucide-react";
import React from "react";
import { TablePagination } from "@/components/table/table-pagination";
import { Button } from "@/components/ui/button";
import { SearchInput } from "@/components/ui/search-input";
import { useGetTransactions } from "@/hooks/transactions/use-get-transactions";
import { CreateTransactionSheet } from "../modals/create-transaction-sheet";
import { TransactionsTableColumns } from "./columns";
import { TransactionTable } from "./table";

interface TransactionsTableContainerProps {
	dashboard?: boolean;
}

export function TransactionsTableContainer({
	dashboard = false,
}: TransactionsTableContainerProps) {
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
		[]
	);
	const [columnVisibility, setColumnVisibility] =
		React.useState<VisibilityState>({});
	const [rowSelection, setRowSelection] = React.useState({});

	const { transactions, isLoadingGetTransactions } = useGetTransactions();

	const table = useReactTable({
		data: transactions,
		columns: TransactionsTableColumns,
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		onColumnVisibilityChange: setColumnVisibility,
		onRowSelectionChange: setRowSelection,
		state: {
			sorting,
			columnFilters,
			columnVisibility,
			rowSelection,
		},
	});

	return (
		<div className="w-full space-y-4 rounded-lg ">
			{dashboard && (
				<div>
					<h1 className="text-2xl font-semibold">Transações</h1>
					<span className="text-sm text-muted-foreground">
						Visualize as transações cadastradas.
					</span>
				</div>
			)}

			{!dashboard && (
				<div className="flex items-center gap-4">
					<SearchInput
						className="!w-[400px]"
						placeholder="Pesquisar transações..."
						value={
							(table.getColumn("description")?.getFilterValue() as string) ?? ""
						}
						onChange={(event) =>
							table.getColumn("description")?.setFilterValue(event.target.value)
						}
					/>

					<Button size="icon" variant="outline">
						<Filter />
					</Button>

					<CreateTransactionSheet />
				</div>
			)}

			<TransactionTable
				table={table}
				isLoading={isLoadingGetTransactions}
				data={transactions}
			/>

			<TablePagination table={table} />
		</div>
	);
}
