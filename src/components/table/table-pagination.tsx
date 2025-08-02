import type { Table } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { Combobox } from "../ui/combobox";
import { Label } from "../ui/label";

const paginationSize = [
	{
		value: "5",
		label: "5",
	},
	{
		value: "10",
		label: "10",
	},
	{
		value: "15",
		label: "15",
	},
];

interface TablePaginationProps<T> {
	table: Table<T>;
	pagination: {
		pageIndex: number;
		pageSize: number;
	};
}

export function TablePagination<T>({
	table,
	pagination,
}: TablePaginationProps<T>) {
	return (
		<div className="flex items-center justify-between space-x-2">
			<div className="flex items-center gap-2">
				<Label className="text-sm">Itens por página: </Label>

				<Combobox
					className="min-w-60px]"
					items={paginationSize}
					entity="itemsPerPage"
					translatedEntity="Items por página"
					defaultValue={String(pagination.pageSize)}
					onChange={(value: string) =>
						table.setPagination({
							pageIndex: 0,
							pageSize: Number(value),
						})
					}
				/>
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
