"use client";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { SquarePen } from "lucide-react";
import { TransactionForm } from "../form/transaction-form";
import { useFormMutation } from "@/hooks/use-form-mutation";
import { updateTransactionSchema } from "@/@types/transaction";
import { useUpdateTransaction } from "@/hooks/transactions/use-update-transaction";
import { Transaction } from "@/@types/transaction";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

interface EditTransactionSheetProps {
	transaction: Transaction;
}

export function EditTransactionSheet({
	transaction,
}: EditTransactionSheetProps) {
	const {
		updateTransactionFn,
		isLoadingUpdateTransaction,
		isUpdateTransactionSheetOpen,
		setIsUpdateTransactionSheetOpen,
	} = useUpdateTransaction();

	const form = useFormMutation({
		schema: updateTransactionSchema,
		defaultValues: {
			name: transaction.name,
			value: transaction.value,
			category: transaction.category,
			installment: transaction.installment,
			type: transaction.type,
			createdAt: transaction.createdAt,
		},
		onSubmit: (data) => {
			updateTransactionFn({
				transactionId: transaction.id,
				data,
			});
		},
	});

	return (
		<Sheet
			open={isUpdateTransactionSheetOpen}
			onOpenChange={setIsUpdateTransactionSheetOpen}
			defaultOpen={isUpdateTransactionSheetOpen}
		>
			<SheetTrigger asChild>
				<DropdownMenuItem onSelect={(e) => e.preventDefault()}>
					<SquarePen />
					Editar
				</DropdownMenuItem>
			</SheetTrigger>

			<SheetContent className="w-full md:max-w-[500px] outline-none">
				<SheetHeader>
					<SheetTitle>Editar Transação</SheetTitle>
					<SheetDescription>Edite os dados da transação.</SheetDescription>
				</SheetHeader>

				<TransactionForm
					form={form}
					isLoadingCreateTransaction={isLoadingUpdateTransaction}
					setIsCreateTransactionSheetOpen={setIsUpdateTransactionSheetOpen}
				/>
			</SheetContent>
		</Sheet>
	);
}
