"use client";
import {
	Ellipsis,
	FileCheck,
	FileDown,
	Printer,
	SquarePen,
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
import { DeleteInvoiceDialog } from "../modals/delete-invoice-dialog";

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

					<DropdownMenuItem disabled>
						<SquarePen className="mr-2 h-4 w-4" />
						Editar
					</DropdownMenuItem>

					<DropdownMenuItem disabled>
						<FileCheck className="mr-2 h-4 w-4" />
						Marcar como paga
					</DropdownMenuItem>

					<DropdownMenuItem disabled>
						<Printer className="mr-2 h-4 w-4" />
						Imprimir
					</DropdownMenuItem>

					<DropdownMenuItem disabled>
						<FileDown className="mr-2 h-4 w-4" />
						Baixar
					</DropdownMenuItem>
				</DropdownMenuGroup>

				<DropdownMenuSeparator />

				<DeleteInvoiceDialog invoice={invoice} />
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
