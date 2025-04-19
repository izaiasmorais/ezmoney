"use client";
import * as React from "react";
import {
	ColumnFiltersState,
	SortingState,
	VisibilityState,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { transactionsTableColumns } from "./transactions-table-columns";
import { TransactionsTable } from "./transactions-table";
import { useGetTransactions } from "@/hooks/transactions/use-get-transactions";
import { transactionTypesOptions } from "@/mocks/transaction-types-options";
import { FormMultiSelect } from "@/components/form/form-multi-select";
import { HideColumnsDropDown } from "@/components/table/hide-columns-dropdown";
import { translateTransactionsTableKeys } from "@/utils/translate-transactions-table-keys";
import { CreateTransactionSheet } from "./create-transaction-sheet";
import { X } from "lucide-react";
import { TablePagination } from "@/components/table/table-pagination";
import { TableSearchInput } from "@/components/table/table-search-input";

export function TransactionsTableContainer() {
	const [sorting, setSorting] = React.useState<SortingState>([
		{
			id: "value",
			desc: true,
		},
	]);
	const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
		[]
	);
	const [columnVisibility, setColumnVisibility] =
		React.useState<VisibilityState>({});
	const [rowSelection, setRowSelection] = React.useState({});
	const { data, isLoadingGetTransactions } = useGetTransactions();

	const table = useReactTable({
		data: data,
		columns: transactionsTableColumns,
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
		<div className="w-full space-y-4">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:flex items-center gap-4">
				<TableSearchInput table={table} placeholder="Pesquisar transações..." />

				<FormMultiSelect
					className="w-full lg:w-[200px]"
					options={transactionTypesOptions}
					placeholder="Tipo"
					onChange={(value: string[]) => {
						if (value.length === 0) {
							table.getColumn("type")?.setFilterValue(undefined);
						} else {
							table.getColumn("type")?.setFilterValue(value);
						}
					}}
				/>

				<Button
					className="text-muted-foreground bg-sidebar hover:bg-sidebar/80"
					onClick={() => [table.resetSorting(), table.resetColumnFilters()]}
				>
					<X />
					Limpar Filtros
				</Button>

				<HideColumnsDropDown
					table={table}
					translateFunction={translateTransactionsTableKeys}
				/>

				<CreateTransactionSheet />
			</div>

			<TransactionsTable
				table={table}
				isLoadingGetTransactions={isLoadingGetTransactions}
				data={data}
			/>

			<TablePagination table={table} />
		</div>
	);
}
