"use client";
import { CreditCard, Ellipsis, Eye, SquarePen } from "lucide-react";
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
import { DeleteBankAccountDialog } from "../modals/delete-bank-account-dialog";

interface CreditCardMenuProps {
	creditCard: BankAccount;
}

export function CreditCardMenu({ creditCard }: CreditCardMenuProps) {
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
						<CreditCard className="mr-2 h-4 w-4" />
						Pagar Fatura
					</DropdownMenuItem>
				</DropdownMenuGroup>

				<DropdownMenuSeparator />

				<DeleteBankAccountDialog bankAccount={creditCard} />
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
