"use client";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Plus } from "lucide-react";
import { TransactionForm } from "../form/transaction-form";
import { useCreateTransaction } from "@/hooks/transactions/use-create-transaction";

interface CreateTransactionSheetProps {
	className?: string;
}

export function CreateTransactionSheet({
	className,
}: CreateTransactionSheetProps) {
	const {
		isCreateTransactionSheetOpen,
		setIsCreateTransactionSheetOpen,
		form,
		isLoadingCreateTransaction,
	} = useCreateTransaction();

	return (
		<Sheet
			open={isCreateTransactionSheetOpen}
			onOpenChange={setIsCreateTransactionSheetOpen}
			defaultOpen={isCreateTransactionSheetOpen}
		>
			<SheetTrigger asChild>
				<Button className={className}>
					<Plus />
					Adicionar Transação
				</Button>
			</SheetTrigger>

			<SheetContent className="w-[500px]">
				<SheetHeader>
					<SheetTitle>Criar Transação</SheetTitle>
					<SheetDescription>Adicione uma nova transação.</SheetDescription>
				</SheetHeader>

				<TransactionForm
					form={form}
					isLoadingCreateTransaction={isLoadingCreateTransaction}
					setIsCreateTransactionSheetOpen={setIsCreateTransactionSheetOpen}
				/>
			</SheetContent>
		</Sheet>
	);
}
