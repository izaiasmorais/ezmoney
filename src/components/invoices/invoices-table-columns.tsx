import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowDown, ArrowUp, ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuItem,
	DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import type { Invoice } from "@/@types/invoice";
import { cn } from "@/lib/utils";
import { InvoiceStatusSelect } from "./invoices-status-select";

export const invoicesTableColumns: ColumnDef<Invoice>[] = [
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
				<ArrowUpDown className="ml-2 h-4 w-4" />
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
				<ArrowUpDown className="ml-2 h-4 w-4" />
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
		accessorKey: "dueDate",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				Vencimento
				<ArrowUpDown className="ml-2 h-4 w-4" />
			</Button>
		),
		cell: ({ row }) => {
			const date = new Date(row.getValue("dueDate"));
			const formattedDate = date.toLocaleDateString("pt-BR", {
				day: "2-digit",
				month: "2-digit",
				year: "numeric",
			});
			return <div>{`${formattedDate}`}</div>;
		},
	},
	{
		accessorKey: "unitValue",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				Valor
				<ArrowUpDown className="ml-2 h-4 w-4" />
			</Button>
		),
		cell: ({ row }) => (
			<div className="font-semibold">
				{Number(row.getValue("unitValue")).toLocaleString("pt-BR", {
					style: "currency",
					currency: "BRL",
				})}
			</div>
		),
		sortDescFirst: true,
	},
	{
		accessorKey: "installments",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				Parcelas
				{column.getIsSorted() !== "desc" && (
					<ArrowUp className="ml-2 h-4 w-4" />
				)}
				{column.getIsSorted() === "desc" && (
					<ArrowDown className="ml-2 h-4 w-4" />
				)}
			</Button>
		),
		cell: ({ row }) => <div>{row.getValue("installments")}</div>,
	},
	{
		accessorKey: "status",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				Status
				<ArrowUpDown className="ml-2 h-4 w-4" />
			</Button>
		),
		cell: ({ row }) => {
			const status = row.getValue("status") as string;
			return (
				<InvoiceStatusSelect
					invoiceId={row.original.id}
					status={status as Invoice["status"]} // Cast to Invoice["status"]
				/>
			);
		},
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
				<ArrowUpDown className="ml-2 h-4 w-4" />
			</Button>
		),
		cell: ({ row }) => {
			const category = row.getValue("category");
			const baseStyle = "rounded-full shadow-none font-semibold px-2";

			const categoryConfig = {
				subscription: {
					bg: "bg-indigo-50 hover:bg-indigo-50 text-indigo-600",
					label: "Assinatura",
				},
				general: {
					bg: "bg-red-50 hover:bg-red-50 text-red-600",
					label: "Geral",
				},
				loan: {
					bg: "bg-blue-50 hover:bg-blue-50 text-blue-600",
					label: "Empréstimo",
				},
				purchase: {
					bg: "bg-green-50 hover:bg-green-50 text-green-600",
					label: "Compra",
				},
				streaming: {
					bg: "bg-yellow-50 hover:bg-yellow-50 text-yellow-600",
					label: "Streaming",
				},
			};

			const config = categoryConfig[category as keyof typeof categoryConfig];

			return config ? (
				<Badge className={cn(baseStyle, config.bg)}>{config.label}</Badge>
			) : null;
		},
	},
	{
		accessorKey: "paymentType",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				Tipo de Pagamento
				<ArrowUpDown className="ml-2 h-4 w-4" />
			</Button>
		),
		cell: ({ row }) => (
			<div className="capitalize">
				<Badge className="rounded-full px-3 bg-muted text-foregrou border border-zinc-300">
					{row.getValue("paymentType") === "recurring" && "Recorrente"}
					{row.getValue("paymentType") === "unique" && "Único"}
				</Badge>
			</div>
		),
	},
	{
		id: "actions",
		enableHiding: false,
		cell: ({ row }) => {
			const invoice = row.original;
			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span className="sr-only">Abrir Menu</span>
							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>Ações</DropdownMenuLabel>
						<DropdownMenuItem
							onClick={() => navigator.clipboard.writeText(invoice.id)}
						>
							Copiar ID da fatura
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>Ver detalhes</DropdownMenuItem>
						<DropdownMenuItem>Editar</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
