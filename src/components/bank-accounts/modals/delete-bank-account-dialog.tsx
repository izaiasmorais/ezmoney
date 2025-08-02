import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useDeleteBankAccount } from "@/hooks/bank-accounts/use-delete-bank-account";
import type { BankAccount } from "@/hooks/bank-accounts/use-get-bank-accounts";

interface DeleteBankAccountDialogProps {
	bankAccount?: BankAccount;
}
export function DeleteBankAccountDialog({
	bankAccount,
}: DeleteBankAccountDialogProps) {
	const {
		deleteBankAccountFn,
		isLoadingDeleteBankAccount,
		isDeleteBankAccountDialogOpen,
		setIsDeleteBankAccountDialogOpen,
	} = useDeleteBankAccount();

	if (!bankAccount) {
		return null;
	}

	return (
		<Dialog
			open={isDeleteBankAccountDialogOpen}
			onOpenChange={setIsDeleteBankAccountDialogOpen}
		>
			<form>
				<DialogTrigger asChild>
					<DropdownMenuItem
						onSelect={(e) => {
							e.preventDefault();
						}}
						className="text-red-500 hover:!text-red-500"
					>
						<Trash className="mr-2 text-red-500" />
						Excluir
					</DropdownMenuItem>
				</DialogTrigger>

				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>Excluir conta bancária</DialogTitle>

						<DialogDescription>
							Você tem certeza que deseja excluir a conta{" "}
							<strong>{bankAccount.name}</strong>?
						</DialogDescription>
					</DialogHeader>

					<div className="w-full flex items-center justify-center py-8">
						<div
							className="w-20 h-20 rounded-full bg-red-50 dark:bg-red-900/20
						flex items-center justify-center"
						>
							<Trash className="text-red-500 dark:text-red-400 w-10 h-10" />
						</div>
					</div>

					<DialogFooter className="grid grid-cols-2 gap-4">
						<DialogClose asChild>
							<Button variant="outline" className="outline-none">
								Cancelar
							</Button>
						</DialogClose>

						<Button
							type="submit"
							variant="destructive"
							isLoading={isLoadingDeleteBankAccount}
							onClick={() => {
								deleteBankAccountFn(bankAccount.id);
							}}
						>
							Confirmar
						</Button>
					</DialogFooter>
				</DialogContent>
			</form>
		</Dialog>
	);
}
