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
import { useDeleteTransaction } from "@/hooks/transactions/use-delete-transaction";
import type { Transaction } from "@/hooks/transactions/use-get-transactions";

interface DeleteTransactionDialogProps {
	transaction: Transaction;
}
export function DeleteTransactionDialog({
	transaction,
}: DeleteTransactionDialogProps) {
	const {
		deleteTransactionFn,
		isLoadingDeleteTransaction,
		isDeleteTransactionDialogOpen,
		setIsDeleteTransactionDialogOpen,
	} = useDeleteTransaction();

	return (
		<Dialog
			open={isDeleteTransactionDialogOpen}
			onOpenChange={setIsDeleteTransactionDialogOpen}
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
						<DialogTitle>Excluir fatura</DialogTitle>

						<DialogDescription>
							Você tem certeza que deseja excluir a transação{" "}
							<strong>{transaction.description}</strong>?
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
							isLoading={isLoadingDeleteTransaction}
							onClick={() => {
								deleteTransactionFn(transaction.id);
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
