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
import { Combobox } from "@/components/ui/combobox";
import { SearchInput } from "@/components/ui/search-input";
import { useGetInvoices } from "@/hooks/invoices/use-get-invoices";
import { CreateInvoiceForm } from "../modals/create-invoice-sheet";
import { InvoicesTableColumns } from "./columns";
import { InvoicesTable } from "./table";

interface InvoicesTableContainerProps {
	dashboard?: boolean;
}

export function InvoicesTableContainer({
	dashboard = false,
}: InvoicesTableContainerProps) {
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
		[]
	);
	const [columnVisibility, setColumnVisibility] =
		React.useState<VisibilityState>({});
	const [rowSelection, setRowSelection] = React.useState({});
	const [pagination, setPagination] = React.useState({
		pageIndex: 0,
		pageSize: 10,
	});
	const { invoices, isLoadingGetInvoices } = useGetInvoices();

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
		onPaginationChange: setPagination,
		state: {
			sorting,
			columnFilters,
			columnVisibility,
			rowSelection,
			pagination,
		},
	});

	return (
		<div className="w-full space-y-4 rounded-lg ">
			{dashboard && (
				<div>
					<h1 className="text-2xl font-semibold">Faturas</h1>
					<span className="text-sm text-muted-foreground">
						Visualize as faturas cadastradas.
					</span>
				</div>
			)}

			{!dashboard && (
				<div className="flex items-center gap-4">
					<SearchInput
						className="!w-[400px]"
						placeholder="Pesquisar faturas..."
						value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
						onChange={(event) =>
							table.getColumn("name")?.setFilterValue(event.target.value)
						}
					/>

					<Combobox
						items={[
							{ label: "Todas", value: "" },
							{ label: "Atrasada", value: "OVERDUE" },
							{ label: "Paga", value: "PAID" },
							{ label: "Pendente", value: "PENDING" },
						]}
						className="w-[161px]"
						entity="status"
						translatedEntity="status"
						placeholder="Filtrar por status"
						onChange={(value) =>
							table.getColumn("status")?.setFilterValue(value)
						}
					/>

					<CreateInvoiceForm />
				</div>
			)}

			<InvoicesTable
				table={table}
				isLoading={isLoadingGetInvoices}
				data={invoices}
			/>

			<TablePagination table={table} pagination={pagination} />
		</div>
	);
}
