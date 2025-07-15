import type { ColumnDef } from "@tanstack/react-table";
import { Ellipsis } from "lucide-react";
import { TableSort } from "@/components/table/table-sort";
import { Button } from "@/components/ui/button";
import type { Category } from "@/hooks/categories/use-get-categories";
import { formatDate } from "@/utils/format-date";
import { CategoryTag } from "./tag";

type CategoryColumnDef = ColumnDef<Category> & {
	accessorKey: keyof Category | "actions";
};

export const CategoriesTableColumns: CategoryColumnDef[] = [
	{
		accessorKey: "name",
		header: ({ column }) => <TableSort column={column}>Nome</TableSort>,
		cell: ({ row }) => <div>{row.getValue("name")}</div>,
	},
	{
		accessorKey: "invoicesCount",
		header: ({ column }) => <TableSort column={column}>Faturas</TableSort>,
		cell: ({ row }) => {
			return (
				<div>
					<CategoryTag
						value={row.getValue("invoicesCount")}
						label="Faturas"
					/>
				</div>
			);
		},
	},
	{
		accessorKey: "transactionsCount",
		header: ({ column }) => <TableSort column={column}>Transações</TableSort>,
		cell: ({ row }) => {
			return (
				<div>
					<CategoryTag
						value={row.getValue("transactionsCount")}
						label="Transações"
					/>
				</div>
			);
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
		cell: () => (
			<div>
				<Button size="icon" variant="ghost">
					<Ellipsis />
				</Button>
			</div>
		),
	},
];
