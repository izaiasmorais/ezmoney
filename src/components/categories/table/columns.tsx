import type { ColumnDef } from "@tanstack/react-table";
import { TableSort } from "@/components/table/table-sort";
import type { Category } from "@/hooks/categories/use-get-categories";
import { formatDate } from "@/utils/format-date";
import { CategoryActions } from "./menu";

type CategoryColumnDef = ColumnDef<Category> & {
	accessorKey: keyof Category | "actions";
};

export const CategoriesTableColumns: CategoryColumnDef[] = [
	{
		accessorKey: "color",
		header: ({ column }) => <TableSort column={column}>Cor</TableSort>,
		cell: ({ row }) => {
			return (
				<div
					className="w-3 h-3 rounded-full"
					style={{ backgroundColor: row.getValue("color") }}
				/>
			);
		},
	},
	{
		accessorKey: "name",
		header: ({ column }) => <TableSort column={column}>Nome</TableSort>,
		cell: ({ row }) => {
			return <div>{row.getValue("name")}</div>;
		},
	},
	{
		accessorKey: "createdAt",
		header: ({ column }) => <TableSort column={column}>Criado em</TableSort>,
		cell: ({ row }) => {
			return <div>{formatDate(row.getValue("createdAt"))}</div>;
		},
	},
	{
		accessorKey: "actions",
		header: ({ column }) => <TableSort column={column}>Ações</TableSort>,
		cell: ({ row }) => <CategoryActions category={row.original} />,
	},
];
