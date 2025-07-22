import type { ColumnDef } from "@tanstack/react-table";
import { TableSort } from "@/components/table/table-sort";
import type { Invoice } from "@/hooks/invoices/use-get-invoices";
import { formatFromNow } from "@/utils/form-from-now";
import { formatCurrency } from "@/utils/format-currency";
import { InvoiceCategory } from "./category";
import { InvoiceActions } from "./menu";
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
			return <div>{formatCurrency(row.getValue("unitValue"))}</div>;
		},
	},
	{
		accessorKey: "totalInstallments",
		header: ({ column }) => <TableSort column={column}>Parcelas</TableSort>,
		cell: ({ row }) => <div>{row.getValue("totalInstallments")}</div>,
	},
	{
		accessorKey: "dueDate",
		header: ({ column }) => <TableSort column={column}>Vencimento</TableSort>,
		cell: ({ row }) => {
			return (
				<div className="flex flex-col gap-1">
					<span>{formatFromNow(row.getValue("dueDate")).date}</span>
					<span className="text-xs text-zinc-500">
						{formatFromNow(row.getValue("dueDate")).due}
					</span>
				</div>
			);
		},
	},
	{
		accessorKey: "category",
		header: ({ column }) => <TableSort column={column}>Categoria</TableSort>,
		cell: ({ row }) => {
			const category = row.original.category;

			return <InvoiceCategory label={category.label} color={category.color} />;
		},
	},
	{
		accessorKey: "status",
		header: ({ column }) => <TableSort column={column}>Status</TableSort>,
		cell: ({ row }) => <InvoiceStatus status={row.getValue("status")} />,
	},
	{
		accessorKey: "actions",
		header: ({ column }) => <TableSort column={column}>Ações</TableSort>,
		cell: ({ row }) => <InvoiceActions invoice={row.original} />,
	},
];
