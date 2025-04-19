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
import { PlusIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { invoicesTableColumns } from "./invoices-table-columns";
import { invoiceStatusOptions } from "@/mocks/invoice-status-options";
import { invoicePaymentTypeOptions } from "@/mocks/invoice-payment-type-options";
import { useGetInvoices } from "@/hooks/invoices/use-get-invoices";
import { useRouter } from "next/navigation";
import { invoiceCategoryOptions } from "@/mocks/invoice-category-options";
import { FormSelect } from "../../form/form-select";
import { translateInvoicesTableKeys } from "@/utils/translate-invoices-table-keys";
import { FormMultiSelect } from "@/components/form/form-multi-select";
import { InvoicesTable } from "./invoices-table";
import { HideColumnsDropDown } from "@/components/table/hide-columns-dropdown";
import { TablePagination } from "@/components/table/table-pagination";
import { TableSearchInput } from "@/components/table/table-search-input";

export function InvoicesTableContainer() {
	const [sorting, setSorting] = React.useState<SortingState>([
		{
			id: "unitValue",
			desc: true,
		},
	]);
	const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
		[]
	);
	const [columnVisibility, setColumnVisibility] =
		React.useState<VisibilityState>({});
	const [rowSelection, setRowSelection] = React.useState({});
	const { data, isLoadingGetInvoices } = useGetInvoices();
	const router = useRouter();

	const table = useReactTable({
		data: data,
		columns: invoicesTableColumns,
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
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:flex items-center gap-4">
				<TableSearchInput table={table} placeholder="Pesquisar contas..." />

				<FormMultiSelect
					options={invoiceStatusOptions}
					placeholder="Status"
					onChange={(value: string[]) => {
						if (value.length === 0) {
							table.getColumn("status")?.setFilterValue(undefined);
						} else {
							table.getColumn("status")?.setFilterValue(value);
						}
					}}
				/>

				<FormSelect
					options={invoicePaymentTypeOptions}
					placeholder="Tipo de Pagamento"
					onChange={(value) =>
						table.getColumn("paymentType")?.setFilterValue(value)
					}
				/>

				<FormSelect
					options={invoiceCategoryOptions}
					placeholder="Categoria"
					onChange={(value) =>
						table.getColumn("category")?.setFilterValue(value)
					}
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
					translateFunction={translateInvoicesTableKeys}
				/>

				<Button
					className="font-semibold"
					onClick={() => router.push("/contas/adicionar-conta")}
				>
					<PlusIcon />
					Adicionar Conta
				</Button>
			</div>

			<InvoicesTable
				table={table}
				isLoadingGetInvoices={isLoadingGetInvoices}
				data={data}
			/>

			<TablePagination table={table} />
		</div>
	);
}
