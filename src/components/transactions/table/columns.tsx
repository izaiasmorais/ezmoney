import type { ColumnDef } from "@tanstack/react-table";
import { TableSort } from "@/components/table/table-sort";
import type { Transaction } from "@/hooks/transactions/use-get-transactions";
import { formatFromNow } from "@/utils/form-from-now";
import { formatCurrency } from "@/utils/format-currency";
import { TransactionCategory } from "./category";
import { TransactionActions } from "./menu";
import { TransactionType } from "./type";

type TransactionColumnDef = ColumnDef<Transaction> & {
	accessorKey: keyof Transaction | "actions";
};

export const TransactionsTableColumns: TransactionColumnDef[] = [
	{
		accessorKey: "description",
		header: ({ column }) => <TableSort column={column}>Descrição</TableSort>,
		cell: ({ row }) => <div>{row.getValue("description")}</div>,
	},
	{
		accessorKey: "amount",
		header: ({ column }) => <TableSort column={column}>Valor</TableSort>,
		cell: ({ row }) => {
			return <div>{formatCurrency(row.getValue("amount"))}</div>;
		},
	},
	{
		accessorKey: "type",
		header: ({ column }) => <TableSort column={column}>Tipo</TableSort>,
		cell: ({ row }) => <TransactionType type={row.getValue("type")} />,
	},
	{
		accessorKey: "category",
		header: ({ column }) => <TableSort column={column}>Categoria</TableSort>,
		cell: ({ row }) => {
			const category = row.original.category;

			return (
				<TransactionCategory label={category.name} color={category.color} />
			);
		},
	},
	{
		accessorKey: "paymentMethod",
		header: ({ column }) => (
			<TableSort column={column}>Método de Pagamento</TableSort>
		),
		cell: ({ row }) => {
			const paymentMethod = row.original.paymentMethod;

			return (
				<TransactionCategory
					label={paymentMethod.name}
					color={paymentMethod.color}
				/>
			);
		},
	},
	{
		accessorKey: "createdAt",
		header: ({ column }) => <TableSort column={column}>Data</TableSort>,
		cell: ({ row }) => {
			return (
				<div className="flex flex-col gap-1">
					<span>{formatFromNow(row.getValue("createdAt")).date}</span>
					<span className="text-xs text-zinc-500">
						{formatFromNow(row.getValue("createdAt")).due}
					</span>
				</div>
			);
		},
	},
	{
		accessorKey: "actions",
		header: ({ column }) => <TableSort column={column}>Ações</TableSort>,
		cell: ({ row }) => <TransactionActions transaction={row.original} />,
	},
];
