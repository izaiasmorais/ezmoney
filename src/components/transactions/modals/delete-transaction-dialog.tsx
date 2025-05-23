import { Button } from "../../ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "../../ui/dialog";
import { LoaderCircle, Trash2, TriangleAlert } from "lucide-react";
import { useDeleteTransaction } from "@/hooks/transactions/use-delete-transaction";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { DropdownMenuItem } from "../../ui/dropdown-menu";
import { Transaction } from "@/@types/transaction";

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

	function handleDeleteTransaction() {
		deleteTransactionFn(transaction.id);
	}

	return (
		<Dialog
			open={isDeleteTransactionDialogOpen}
			onOpenChange={setIsDeleteTransactionDialogOpen}
		>
			<DialogTrigger className="w-full">
				<DropdownMenuItem
					className="text-red-500 focus:text-red-500 hover:text-red-500"
					onSelect={(e) => e.preventDefault()}
				>
					<Trash2 className="text-red-500" />
					Excluir
				</DropdownMenuItem>
			</DialogTrigger>

			<DialogContent className="w-[400px] flex flex-col gap-12">
				<DialogHeader className="flex flex-col items-center text-center">
					<div className="p-3 rounded-full bg-red-50 dark:bg-red-900 max-w-max flex">
						<TriangleAlert className="w-8 h-8 text-red-500 dark:text-red-300" />
					</div>

					<DialogTitle>Você tem certeza?</DialogTitle>

					<DialogDescription className="text-center">
						Tem certeza que quer excluir a transação{" "}
						<strong>{transaction.name}</strong>? Essa ação não pode ser
						desfeita.
					</DialogDescription>
				</DialogHeader>

				<div className="flex gap-2 w-full items-center text-center justify-end">
					<DialogTrigger asChild>
						<Button
							variant="outline"
							disabled={isLoadingDeleteTransaction}
							aria-disabled={isLoadingDeleteTransaction}
							className="w-1/2"
						>
							Cancelar
						</Button>
					</DialogTrigger>

					<Button
						onClick={handleDeleteTransaction}
						disabled={isLoadingDeleteTransaction}
						aria-disabled={isLoadingDeleteTransaction}
						variant="destructive"
						className="w-1/2"
					>
						{isLoadingDeleteTransaction && (
							<LoaderCircle className="animate-spin" />
						)}
						Confirmar
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
}
