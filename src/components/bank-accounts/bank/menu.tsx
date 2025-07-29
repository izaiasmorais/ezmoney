"use client";
import {
	ArrowLeftRight,
	Ellipsis,
	Landmark,
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

interface BankAccountMenuProps {
	bankAccountId: string;
}

export function BankAccountMenu({ bankAccountId }: BankAccountMenuProps) {
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
						<SquarePen className="mr-2 h-4 w-4" />
						Editar
					</DropdownMenuItem>

					<DropdownMenuItem>
						<Landmark className="mr-2 h-4 w-4" />
						Depósito
					</DropdownMenuItem>

					<DropdownMenuItem>
						<ArrowLeftRight className="mr-2 h-4 w-4" />
						transferência
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
