"use client";
import { Plus } from "lucide-react";
import { FormColorPicker } from "@/components/form/form-color-picker";
import { FormInput } from "@/components/form/form-input";
import { FormMoneyInput } from "@/components/form/form-money-input";
import { SubmitButton } from "@/components/form/form-submit-button";
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
	const { form, isLoadingCreateBankAccount } = useCreateBankAccount();

	const accountType = form.watch("type");

	const isCredit = accountType === "CREDIT_CARD";

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button className="ml-auto" variant="outline">
					<Plus />
					Criar Conta Bancária
				</Button>
			</SheetTrigger>

			<SheetContent className="w-[500px]">
				<SheetHeader>
					<SheetTitle>Criar Conta Bancária</SheetTitle>
					<SheetDescription>
						Crie uma nova conta bancária para organizar suas finanças.
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
							placeholder="Nome da conta"
						/>

						<FormToggleGroup
							form={form}
							entity="type"
							translatedEntity="Tipo de conta"
							options={accountTypeOptions}
							className="w-full"
							alwaysSelected={true}
						/>

						<FormColorPicker
							form={form}
							entity="color"
							label="Cor"
							placeholder="Selecione uma cor"
						/>

						{!isCredit && (
							<FormMoneyInput
								form={form}
								entity="balance"
								label="Saldo inicial"
								placeholder="Saldo inicial da conta bancária"
							/>
						)}

						{isCredit && (
							<FormMoneyInput
								form={form}
								entity="creditLimit"
								label="Limite de crédito"
								placeholder="Limite do cartão de crédito"
							/>
						)}

						{isCredit && (
							<div className="grid grid-cols-2 gap-2">
								<FormInput
									form={form}
									type="number"
									entity="closingDay"
									label="Dia do fechamento"
									placeholder="Dia do fechamento (1-31)"
									min={0}
									max={31}
								/>

								<FormInput
									form={form}
									type="number"
									entity="dueDay"
									label="Dia do vencimento"
									placeholder="Dia do vencimento (1-31)"
									min={0}
									max={31}
								/>
							</div>
						)}

						<SheetFooter>
							<SheetClose asChild>
								<Button variant="outline">Cancelar</Button>
							</SheetClose>

							<SubmitButton isLoading={isLoadingCreateBankAccount}>
								Confirmar
							</SubmitButton>
						</SheetFooter>
					</form>
				</Form>
			</SheetContent>
		</Sheet>
	);
}
