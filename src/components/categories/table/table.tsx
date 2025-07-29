import { flexRender, type Table as TableType } from "@tanstack/react-table";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import type { Category } from "@/hooks/categories/use-get-categories";
import { CategoriesTableColumns } from "./columns";
import { CategoriesTableSkeleton } from "./skeleton";
import { TableEmpty } from "@/components/table/table-empty";

interface CategoriesTableProps {
	table: TableType<Category>;
	isLoading: boolean;
	data: Category[];
	widths?: string[];
}

export function CategoriesTable({
	table,
	isLoading,
	data,
	widths = ["w-[200px]", "w-[200px]", "w-[200px]", "w-[50px]"],
}: CategoriesTableProps) {
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
				{isLoading && <CategoriesTableSkeleton />}

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
								colSpan={CategoriesTableColumns.length}
								className="h-24 text-center"
							>
								<TableEmpty
									message="Você não possui categorias"
									description="Adicione uma categoria para começar."
								/>
							</TableCell>
						</TableRow>
					)}
			</TableBody>
		</Table>
	);
}
