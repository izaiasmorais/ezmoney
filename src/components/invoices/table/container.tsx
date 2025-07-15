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
import React from "react";
import { TablePagination } from "@/components/table/table-pagination";
import { invoices } from "@/mocks/invoices";
import { InvoicesTableColumns } from "./columns";
import { InvoicesTable } from "./table";

export function InvoicesTableContainer() {
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
		[]
	);
	const [columnVisibility, setColumnVisibility] =
		React.useState<VisibilityState>({});
	const [rowSelection, setRowSelection] = React.useState({});

	const table = useReactTable({
		data: invoices,
		columns: InvoicesTableColumns,
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
			<div>
				<h1 className="text-2xl font-semibold">Faturas</h1>
				<span className="text-sm text-muted-foreground">
					Visualize as faturas cadastradas.
				</span>
			</div>

			<InvoicesTable table={table} isLoading={false} data={invoices} />

			<TablePagination table={table} />
		</div>
	);
}
