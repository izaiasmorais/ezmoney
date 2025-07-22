import type { Column } from "@tanstack/react-table";
import { ArrowDown, ArrowUp } from "lucide-react";
import type React from "react";
import { Button } from "@/components/ui/button";

interface TableSortProps<T> {
	column: Column<T, unknown>;
	children: React.ReactNode;
}

export function TableSort<T>({ column, children }: TableSortProps<T>) {
	return (
		<Button
			variant="ghost"
			className="!p-0 hover:bg-transparent"
			onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
		>
			{children}

			{column.getIsSorted() !== "desc" && (
				<ArrowUp className="ml-2 !w-4 !h-4" />
			)}

			{column.getIsSorted() === "desc" && (
				<ArrowDown className="ml-2  !w-4 !h-4" />
			)}
		</Button>
	);
}
