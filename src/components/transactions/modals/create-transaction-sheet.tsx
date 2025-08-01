"use client";
import { Plus } from "lucide-react";
import { FormInput } from "@/components/form/form-input";
import { FormInputSkeleton } from "@/components/form/form-input-sleleton";
import { FormMoneyInput } from "@/components/form/form-money-input";
import { SubmitButton } from "@/components/form/form-submit-button";
import { FormToggleGroup } from "@/components/form/form-toggle-group";
import { Button } from "@/components/ui/button";
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
import { useGetBankAccounts } from "@/hooks/bank-accounts/use-get-bank-accounts";
import { useCreateTransaction } from "@/hooks/transactions/use-create-transaction";
import { FormBankAccountCombobox } from "./form-bank-account-combobox";

const transactionTypeOptions = [
	{ label: "Saída", value: "EXPENSE" },
	{ label: "Entrada", value: "INCOME" },
];

export function CreateTransactionSheet() {
	const {
		form,
		isLoadingCreateTransaction,
		isCreateTransactionSheetOpen,
		setIsCreateTransactionSheetOpen,
	} = useCreateTransaction();

	const { bankAccounts, creditCards, isLoadingGetBankAccounts } = useGetBankAccounts();

	const bankAccountsOptions = [...bankAccounts, ...creditCards].map((bankAccount) => ({
		label: bankAccount.name,
		value: bankAccount.id,
		color: bankAccount.color,
	}));

	return (
		<Sheet
			open={isCreateTransactionSheetOpen}
			onOpenChange={setIsCreateTransactionSheetOpen}
		>
			<SheetTrigger asChild>
				<Button variant="outline" className="ml-auto">
					<Plus />
					Nova Transação
				</Button>
			</SheetTrigger>

			<SheetContent className="w-[500px]">
				<SheetHeader>
					<SheetTitle>Nova Transação</SheetTitle>
					<SheetDescription>
						Crie uma nova transação para organizar suas finanças.
					</SheetDescription>
				</SheetHeader>

				<Form {...form}>
					<form
						onSubmit={form.handleSubmitForm}
						className="space-y-4 flex-1 flex flex-col"
					>
						<FormInput
							form={form}
							entity="description"
							label="Descrição"
							placeholder="Ex: Supermercado"
						/>

						<FormMoneyInput
							form={form}
							entity="amount"
							label="Valor"
							placeholder="Ex: 1.000,00"
						/>

						<FormToggleGroup
							form={form}
							entity="type"
							translatedEntity="Tipo de transação"
							options={transactionTypeOptions}
							className="w-full"
							alwaysSelected={true}
							onChange={() => form.clearErrors()}
						/>

						{isLoadingGetBankAccounts && (
							<FormInputSkeleton
								label="Conta bancária"
								message="Carregando contas bancárias"
							/>
						)}

						{!isLoadingGetBankAccounts && (
							<FormBankAccountCombobox
								form={form}
								entity="bankAccountId"
								translatedEntity="Forma de pagamento"
								placeholder="Selecione uma forma de pagamento"
								emptyMessage="Nenhuma forma de pagamento encontrada"
								options={bankAccountsOptions}
							/>
						)}

						<SheetFooter>
							<SheetClose asChild>
								<Button variant="outline">Cancelar</Button>
							</SheetClose>

							<SubmitButton isLoading={isLoadingCreateTransaction}>
								Confirmar
							</SubmitButton>
						</SheetFooter>
					</form>
				</Form>
			</SheetContent>
		</Sheet>
	);
}
