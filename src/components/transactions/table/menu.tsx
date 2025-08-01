"use client";
import { Ellipsis, Eye, SquarePen } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Transaction } from "@/hooks/transactions/use-get-transactions";
import { DeleteTransactionDialog } from "../modals/delete-transactions-dialog";

interface TransactionActionsProps {
	transaction: Transaction;
}

export function TransactionActions({ transaction }: TransactionActionsProps) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button size="icon" variant="ghost">
					<Ellipsis />
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent className="w-56" align="end">
				<DropdownMenuGroup>
					<DropdownMenuItem>
						<Eye className="mr-2 h-4 w-4" />
						Visualizar
					</DropdownMenuItem>

					<DropdownMenuItem>
						<SquarePen className="mr-2 h-4 w-4" />
						Editar
					</DropdownMenuItem>
				</DropdownMenuGroup>

				<DropdownMenuSeparator />

				<DeleteTransactionDialog transaction={transaction} />
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
