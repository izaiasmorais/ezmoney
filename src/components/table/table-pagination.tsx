import { Table } from "@tanstack/react-table";
import { Button } from "../ui/button";

interface TablePaginationProps<T> {
	table: Table<T>;
}

export function TablePagination<T>({ table }: TablePaginationProps<T>) {
	return (
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
	);
}
