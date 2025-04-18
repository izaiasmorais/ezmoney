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
import { ChevronDown, PlusIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { invoicesTableColumns } from "./invoices-table-columns";
import { SearchInput } from "@/components/ui/search-input";
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
				<SearchInput
					placeholder="Pesquisar contas..."
					value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
					onChange={(event) =>
						table.getColumn("name")?.setFilterValue(event.target.value)
					}
				/>

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

				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							variant="outline"
							className="font-semibold md:ml-auto w-full xl:w-[100px]"
						>
							<div className="flex items-center gap-2">
								Exibir <ChevronDown />
							</div>
						</Button>
					</DropdownMenuTrigger>

					<DropdownMenuContent align="end">
						{table
							.getAllColumns()
							.filter((column) => column.getCanHide())
							.map((column) => {
								return (
									<DropdownMenuCheckboxItem
										key={column.id}
										className="capitalize"
										checked={column.getIsVisible()}
										onCheckedChange={(value) =>
											column.toggleVisibility(!!value)
										}
									>
										{translateInvoicesTableKeys(column.id)}
									</DropdownMenuCheckboxItem>
								);
							})}
					</DropdownMenuContent>
				</DropdownMenu>

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

			<div>
				<InvoicesTable
					table={table}
					isLoadingGetInvoices={isLoadingGetInvoices}
					data={data}
				/>
			</div>

			<div className="flex items-center justify-end space-x-2">
				<div className="flex-1 text-sm text-muted-foreground">
					{table.getFilteredSelectedRowModel().rows.length} de{" "}
					{table.getFilteredRowModel().rows.length} linha(s) selecionada(s).
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
