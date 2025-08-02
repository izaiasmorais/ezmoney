"use client";
import { Ellipsis, Eye, Landmark, SquarePen } from "lucide-react";
import { BankTransferSheet } from "@/components/bank-accounts/modals/bank-transfer-sheet";
import { DeleteBankAccountDialog } from "@/components/bank-accounts/modals/delete-bank-account-dialog";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { BankAccount } from "@/hooks/bank-accounts/use-get-bank-accounts";

interface BankAccountMenuProps {
	bankAccount?: BankAccount;
}

export function BankAccountMenu({ bankAccount }: BankAccountMenuProps) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button size="icon" variant="ghost">
					<Ellipsis />
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent className="w-56" align="end">
				<DropdownMenuGroup>
					<DropdownMenuItem disabled>
						<Eye className="mr-2 h-4 w-4" />
						Visualizar
					</DropdownMenuItem>

					<DropdownMenuItem disabled>
						<SquarePen className="mr-2 h-4 w-4" />
						Editar
					</DropdownMenuItem>

					<DropdownMenuItem disabled>
						<Landmark className="mr-2 h-4 w-4" />
						Depósito
					</DropdownMenuItem>

					<BankTransferSheet currentBankAccount={bankAccount} />
				</DropdownMenuGroup>

				<DropdownMenuSeparator />

				<DeleteBankAccountDialog bankAccount={bankAccount} />
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
