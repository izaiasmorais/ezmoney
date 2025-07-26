"use client";
import { Ellipsis, Eye, SquarePen, Trash } from "lucide-react";
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

				<DropdownMenuItem className="text-red-400 hover:!text-red-400">
					<Trash className="mr-2 h-4 w-4 text-red-400" />
					Excluir
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
