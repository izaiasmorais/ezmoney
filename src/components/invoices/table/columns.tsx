import type { ColumnDef } from "@tanstack/react-table";
import { Ellipsis } from "lucide-react";
import { TableSort } from "@/components/table/table-sort";
import { Button } from "@/components/ui/button";
import type { Invoice } from "@/hooks/invoices/use-get-invoices";
import { formatDate } from "@/utils/format-date";
import { formatToBRL } from "@/utils/format-to-brl";
import { InvoiceCategory } from "./category";
import { InvoiceStatus } from "./status";

type InvoiceColumnDef = ColumnDef<Invoice> & {
	accessorKey: keyof Invoice | "actions";
};

export const InvoicesTableColumns: InvoiceColumnDef[] = [
	{
		accessorKey: "name",
		header: ({ column }) => <TableSort column={column}>Nome</TableSort>,
		cell: ({ row }) => <div>{row.getValue("name")}</div>,
	},
	{
		accessorKey: "unitValue",
		header: ({ column }) => (
			<TableSort column={column}>Valor Unitário</TableSort>
		),
		cell: ({ row }) => {
			return <div>{formatToBRL(row.getValue("unitValue"))}</div>;
		},
	},
	{
		accessorKey: "installments",
		header: ({ column }) => <TableSort column={column}>Parcelas</TableSort>,
		cell: ({ row }) => <div>{row.getValue("installments")}</div>,
	},
	{
		accessorKey: "dueDate",
		header: ({ column }) => <TableSort column={column}>Vencimento</TableSort>,
		cell: ({ row }) => {
			return <div>{formatDate(row.getValue("dueDate"))}</div>;
		},
	},
	{
		accessorKey: "category",
		header: ({ column }) => <TableSort column={column}>Categoria</TableSort>,
		cell: ({ row }) => (
			<InvoiceCategory>{row.getValue("category")}</InvoiceCategory>
		),
	},
	{
		accessorKey: "status",
		header: ({ column }) => <TableSort column={column}>Status</TableSort>,
		cell: ({ row }) => <InvoiceStatus status={row.getValue("status")} />,
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
