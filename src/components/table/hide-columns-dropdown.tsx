import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Table } from "@tanstack/react-table";
import { cn } from "@/lib/utils";

interface HideColumnsDropDownProps<T> {
	table: Table<T>;
	translateFunction: (key: string) => string;
	className?: string;
}

export function HideColumnsDropDown<T>({
	table,
	translateFunction,
	className,
}: HideColumnsDropDownProps<T>) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="outline"
					className={cn("font-semibold md:ml-auto", className)}
				>
					Exibir <ChevronDown />
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent align="end" className="w-full lg:w-[150px]">
				{table
					.getAllColumns()
					.filter((column) => column.getCanHide())
					.map((column) => {
						return (
							<DropdownMenuCheckboxItem
								key={column.id}
								className="capitalize"
								checked={column.getIsVisible()}
								onClick={(e) => e.preventDefault()}
								onCheckedChange={(value) => [column.toggleVisibility(!!value)]}
							>
								{translateFunction(column.id)}
							</DropdownMenuCheckboxItem>
						);
					})}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
