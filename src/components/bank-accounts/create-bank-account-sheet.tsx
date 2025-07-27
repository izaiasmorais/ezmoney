"use client";
import { Plus } from "lucide-react";
import { FormColorPicker } from "@/components/form/form-color-picker";
import { FormInput } from "@/components/form/form-input";
import { FormMoneyInput } from "@/components/form/form-money-input";
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
import { useCreateBankAccount } from "@/hooks/bank-accounts/use-create-bank-account";
import { FormToggleGroup } from "../form/form-toggle-group";

const accountTypeOptions = [
	{ label: "Conta Bancária", value: "BANK" },
	{ label: "Cartão de Crédito", value: "CREDIT_CARD" },
];

export function CreateBankAccountForm() {
	const {
		form,
		isLoadingCreateBankAccount,
		isCreateBankAccountSheetOpen,
		setIsCreateBankAccountSheetOpen,
	} = useCreateBankAccount();

	const accountType = form.watch("type");

	const isCredit = accountType === "CREDIT_CARD";

	return (
		<Sheet
			open={isCreateBankAccountSheetOpen}
			onOpenChange={setIsCreateBankAccountSheetOpen}
		>
			<SheetTrigger asChild>
				<Button className="ml-auto" variant="outline">
					<Plus />
					Adicionar Conta Bancária
				</Button>
			</SheetTrigger>

			<SheetContent className="w-[500px]">
				<SheetHeader>
					<SheetTitle>Adicionar Conta Bancária</SheetTitle>
					<SheetDescription>
						Adicione uma nova conta bancária para organizar suas finanças. Ela
						pode ser uma conta bancária ou um cartão de crédito.
					</SheetDescription>
				</SheetHeader>

				<Form {...form}>
					<form
						onSubmit={form.handleSubmitForm}
						className="space-y-4 flex-1 flex flex-col"
					>
						<FormInput
							form={form}
							entity="name"
							label="Nome"
							placeholder="Ex: Banco do Brasil"
						/>

						<FormToggleGroup
							form={form}
							entity="type"
							translatedEntity="Tipo de conta"
							options={accountTypeOptions}
							className="w-full"
							alwaysSelected={true}
							onChange={() => form.clearErrors()}
						/>

						<FormColorPicker form={form} entity="color" label="Cor" />

						{!isCredit && (
							<FormMoneyInput
								form={form}
								entity="balance"
								label="Saldo inicial"
							/>
						)}

						{isCredit && (
							<FormMoneyInput
								form={form}
								entity="creditLimit"
								label="Limite de crédito"
								placeholder="Ex: R$ 1.000,00"
							/>
						)}

						{isCredit && (
							<div className="grid grid-cols-2 gap-2">
								<FormInput
									form={form}
									type="number"
									entity="closingDay"
									label="Dia do fechamento"
									placeholder="Um dia entre 1 e 31"
									min={0}
									max={31}
								/>

								<FormInput
									form={form}
									type="number"
									entity="dueDay"
									label="Dia do vencimento"
									placeholder="Um dia entre 1 e 31"
									min={0}
									max={31}
								/>
							</div>
						)}

						<SheetFooter>
							<SheetClose asChild>
								<Button variant="outline">Cancelar</Button>
							</SheetClose>

							<Button
								isLoading={isLoadingCreateBankAccount}
								disabled={isLoadingCreateBankAccount}
							>
								Confirmar
							</Button>
						</SheetFooter>
					</form>
				</Form>
			</SheetContent>
		</Sheet>
	);
}
