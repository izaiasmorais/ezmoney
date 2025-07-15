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
			{column.getIsSorted() !== "desc" && <ArrowUp className="ml-2 h-2 w-2" />}
			{column.getIsSorted() === "desc" && (
				<ArrowDown className="ml-2 h-2 w-2" />
			)}
		</Button>
	);
}
