import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUp, ArrowDown, Copy, MoreHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import type { Transaction } from "@/@types/transaction";
import { TransactionsCategorySelect } from "./transactions-category-select";
import { TransactionsTypeSelect } from "./transactions-type-select";
import { EditTransactionSheet } from "./edit-transaction-sheet";
import { DeleteTransactionDialog } from "./delete-transaction-dialog";
export const transactionsTableColumns: ColumnDef<Transaction>[] = [
	{
		id: "select",
		header: ({ table }) => (
			<Checkbox
				checked={
					table.getIsAllPageRowsSelected() ||
					(table.getIsSomePageRowsSelected() && "indeterminate")
				}
				onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
				aria-label="Select all"
			/>
		),
		cell: ({ row }) => (
			<Checkbox
				checked={row.getIsSelected()}
				onCheckedChange={(value) => row.toggleSelected(!!value)}
				aria-label="Select row"
			/>
		),
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: "name",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				Nome
				{column.getIsSorted() !== "desc" && (
					<ArrowUp className="ml-2 h-4 w-4" />
				)}
				{column.getIsSorted() === "desc" && (
					<ArrowDown className="ml-2 h-4 w-4" />
				)}
			</Button>
		),
		cell: ({ row }) => (
			<div className="capitalize font-semibold">{row.getValue("name")}</div>
		),
	},
	{
		accessorKey: "createdAt",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				Criado em
				{column.getIsSorted() !== "desc" && (
					<ArrowUp className="ml-2 h-4 w-4" />
				)}
				{column.getIsSorted() === "desc" && (
					<ArrowDown className="ml-2 h-4 w-4" />
				)}
			</Button>
		),
		cell: ({ row }) => {
			const date = new Date(row.getValue("createdAt"));
			const formattedDate = date.toLocaleDateString("pt-BR", {
				day: "2-digit",
				month: "2-digit",
				year: "numeric",
			});
			return <div>{`${formattedDate}`}</div>;
		},
	},
	{
		accessorKey: "value",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				Valor
				{column.getIsSorted() !== "desc" && (
					<ArrowUp className="ml-2 h-4 w-4" />
				)}
				{column.getIsSorted() === "desc" && (
					<ArrowDown className="ml-2 h-4 w-4" />
				)}
			</Button>
		),
		cell: ({ row }) => (
			<div className="font-semibold">
				{Number(row.getValue("value")).toLocaleString("pt-BR", {
					style: "currency",
					currency: "BRL",
				})}
			</div>
		),
	},
	{
		accessorKey: "category",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				Categoria
				{column.getIsSorted() !== "desc" && (
					<ArrowUp className="ml-2 h-4 w-4" />
				)}
				{column.getIsSorted() === "desc" && (
					<ArrowDown className="ml-2 h-4 w-4" />
				)}
			</Button>
		),
		cell: ({ row }) => (
			<TransactionsCategorySelect
				transactionId={row.original.id}
				category={row.getValue("category") as Transaction["category"]}
			/>
		),
	},
	{
		accessorKey: "type",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				Tipo
				{column.getIsSorted() !== "desc" && (
					<ArrowUp className="ml-2 h-4 w-4" />
				)}
				{column.getIsSorted() === "desc" && (
					<ArrowDown className="ml-2 h-4 w-4" />
				)}
			</Button>
		),
		cell: ({ row }) => (
			<TransactionsTypeSelect
				transactionId={row.original.id}
				type={row.getValue("type") as Transaction["type"]}
			/>
		),
		filterFn: (row, id, filterValue) => {
			const type = row.getValue(id) as string;

			return Array.isArray(filterValue) ? filterValue.includes(type) : true;
		},
	},
	{
		accessorKey: "installment",
		header: "Parcela",
		cell: ({ row }) => <div>{row.getValue("installment")}</div>,
	},
	{
		id: "actions",
		enableHiding: false,
		cell: ({ row }) => {
			const transaction = row.original;
			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span className="sr-only">Abrir Menu</span>
							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>

					<DropdownMenuContent align="end">
						<DropdownMenuItem
							onClick={() => navigator.clipboard.writeText(transaction.id)}
						>
							<Copy />
							Copiar ID da transação
						</DropdownMenuItem>

						<EditTransactionSheet transaction={transaction} />

						<DeleteTransactionDialog transaction={transaction} />
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
