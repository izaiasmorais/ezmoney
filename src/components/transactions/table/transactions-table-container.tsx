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
import { SearchInput } from "@/components/ui/search-input";
import { transactionsTableColumns } from "./transactions-table-columns";
import { TransactionsTable } from "./transactions-table";
import { useGetTransactions } from "@/hooks/transactions/use-get-transactions";
import { transactionTypesOptions } from "@/mocks/transaction-types-options";
import { FormMultiSelect } from "@/components/form/form-multi-select";
import { HideColumnsDropDown } from "@/components/table/hide-columns-dropdown";
import { translateTransactionsTableKeys } from "@/utils/translate-transactions-table-keys";
import { CreateTransactionSheet } from "./create-transaction-sheet";
import { X } from "lucide-react";

export function TransactionsTableContainer() {
	const [sorting, setSorting] = React.useState<SortingState>([]);
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
				<SearchInput
					className="w-full lg:w-[250px]"
					placeholder="Pesquisar transações..."
					value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
					onChange={(event) =>
						table.getColumn("name")?.setFilterValue(event.target.value)
					}
				/>

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

			<div>
				<TransactionsTable
					table={table}
					isLoadingGetTransactions={isLoadingGetTransactions}
					data={data}
				/>
			</div>

			<div className="flex items-center justify-end space-x-2">
				<div className="flex-1 text-sm text-muted-foreground">
					{table.getFilteredSelectedRowModel().rows.length} de{" "}
					{table.getFilteredRowModel().rows.length} linha(s){" "}
					<span className="hidden sm:inline">selecionada(s)</span>.
				</div>

				<div className="space-x-2">
					<Button
						variant="outline"
						size="sm"
						onClick={() => table.previousPage()}
						disabled={!table.getCanPreviousPage()}
					>
						Anterior
					</Button>

					<Button
						variant="outline"
						size="sm"
						onClick={() => table.nextPage()}
						disabled={!table.getCanNextPage()}
					>
						Próximo
					</Button>
				</div>
			</div>
		</div>
	);
}
