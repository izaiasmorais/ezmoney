"use client";
import {
	Ellipsis,
	FileCheck,
	FileDown,
	Printer,
	SquarePen,
	Trash,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Invoice } from "@/hooks/invoices/use-get-invoices";
import { InvoiceDetailsDialog } from "../details/invoice-details-dialog";

interface InvoiceActionsProps {
	invoice: Invoice;
}

export function InvoiceActions({ invoice }: InvoiceActionsProps) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button size="icon" variant="ghost">
					<Ellipsis />
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent className="w-56" align="end">
				<DropdownMenuGroup>
					<InvoiceDetailsDialog invoice={invoice} />

					<DropdownMenuItem>
						<SquarePen className="mr-2 h-4 w-4" />
						Editar
					</DropdownMenuItem>

					<DropdownMenuItem>
						<FileCheck className="mr-2 h-4 w-4" />
						Marcar como paga
					</DropdownMenuItem>

					<DropdownMenuItem>
						<Printer className="mr-2 h-4 w-4" />
						Imprimir
					</DropdownMenuItem>

					<DropdownMenuItem>
						<FileDown className="mr-2 h-4 w-4" />
						Baixar
					</DropdownMenuItem>
				</DropdownMenuGroup>

				<DropdownMenuSeparator />

				<DropdownMenuItem className="text-red-400 hover:!text-red-400">
					<Trash className="mr-2 h-4 w-4 text-red-400" />
					Excluir
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
