"use client";
import { ArrowLeftRight } from "lucide-react";
import { FormMoneyInput } from "@/components/form/form-money-input";
import { FormBankAccountCombobox } from "@/components/transactions/modals/form-bank-account-combobox";
import { Button } from "@/components/ui/button";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Form } from "@/components/ui/form";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

import type { BankAccount } from "@/hooks/bank-accounts/use-get-bank-accounts";
import { useGetBankAccounts } from "@/hooks/bank-accounts/use-get-bank-accounts";
import { useTransferBetweenBankAccounts } from "@/hooks/bank-accounts/use-transfer-between-bank-accounts";

interface BankTransferSheetProps {
	currentBankAccount?: BankAccount;
}

export function BankTransferSheet({
	currentBankAccount,
}: BankTransferSheetProps) {
	const { bankAccounts } = useGetBankAccounts();
	const {
		form,
		isLoadingTransferBetweenBankAccounts,
		isBankTransferSheetOpen,
		setIsBankTransferSheetOpen,
	} = useTransferBetweenBankAccounts();

	const destinationAccounts = bankAccounts.filter(
		(account) =>
			account.id !== currentBankAccount?.id && account.type === "BANK"
	);

	const accountOptions = destinationAccounts.map((account) => ({
		label: account.name,
		value: account.id,
		color: account.color,
	}));

	const handleOpenChange = (open: boolean) => {
		setIsBankTransferSheetOpen(open);
		if (open && currentBankAccount) {
			form.setValue("fromAccountId", currentBankAccount.id);
		}
	};

	if (!currentBankAccount || currentBankAccount.type !== "BANK") {
		return null;
	}

	return (
		<Sheet open={isBankTransferSheetOpen} onOpenChange={handleOpenChange}>
			<SheetTrigger asChild>
				<DropdownMenuItem
					onSelect={(e) => {
						e.preventDefault();
					}}
				>
					<ArrowLeftRight className="mr-2 h-4 w-4" />
					Transferência
				</DropdownMenuItem>
			</SheetTrigger>

			<SheetContent className="w-[500px]">
				<SheetHeader>
					<SheetTitle>Transferir entre contas</SheetTitle>
					<SheetDescription>
						Transfira dinheiro de <strong>{currentBankAccount.name}</strong>{" "}
						para outra conta bancária.
					</SheetDescription>
				</SheetHeader>

				<Form {...form}>
					<form
						onSubmit={form.handleSubmitForm}
						className="space-y-4 flex-1 flex flex-col"
					>
						<FormBankAccountCombobox
							form={form}
							entity="toAccountId"
							translatedEntity="Conta de destino"
							options={accountOptions}
							emptyMessage="Nenhuma conta bancária disponível para transferência"
						/>

						<FormMoneyInput
							form={form}
							entity="value"
							label="Valor da transferência"
							placeholder="Ex: R$ 100,00"
						/>

						<SheetFooter>
							<SheetClose asChild>
								<Button variant="outline">Cancelar</Button>
							</SheetClose>

							<Button
								type="submit"
								isLoading={isLoadingTransferBetweenBankAccounts}
							>
								Confirmar Transferência
							</Button>
						</SheetFooter>
					</form>
				</Form>
			</SheetContent>
		</Sheet>
	);
}
