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
import { useGetCategories } from "@/hooks/categories/use-get-categories";
import { CreateCategorySheet } from "../modals/create-category-sheet";
import { CategoriesTableColumns } from "./columns";
import { CategoriesTable } from "./table";

export function CategoriesTableContainer() {
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
	const { categories, isLoadingGetCategories } = useGetCategories();

	const table = useReactTable({
		data: categories,
		columns: CategoriesTableColumns,
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
		<div className="w-full space-y-4 rounded-lg">
			<div className="flex items-center gap-4">
				<SearchInput
					className="!w-[400px]"
					placeholder="Pesquisar categorias..."
					value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
					onChange={(event) =>
						table.getColumn("name")?.setFilterValue(event.target.value)
					}
				/>

				<Button size="icon" variant="outline">
					<Filter />
				</Button>

				<CreateCategorySheet />
			</div>

			<CategoriesTable
				table={table}
				isLoading={isLoadingGetCategories}
				data={categories}
			/>

			<TablePagination table={table} pagination={pagination} />
		</div>
	);
}
