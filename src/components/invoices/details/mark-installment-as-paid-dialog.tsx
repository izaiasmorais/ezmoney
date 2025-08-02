"use client";
import { FormCheckbox } from "@/components/form/form-checkbox";
import { FormInputSkeleton } from "@/components/form/form-input-sleleton";
import { SubmitButton } from "@/components/form/form-submit-button";
import { FormBankAccountCombobox } from "@/components/transactions/modals/form-bank-account-combobox";
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
import { Form } from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { useGetBankAccounts } from "@/hooks/bank-accounts/use-get-bank-accounts";
import { useMarkInstallmentAsPaid } from "@/hooks/installments/use-mark-installment-as-paid";
import type { Installment } from "@/hooks/invoices/use-get-invoices-installments";

interface MarkInstallmentAsPaidDialogProps {
	installment: Installment;
}

export function MarkInstallmentAsPaidDialog({
	installment,
}: MarkInstallmentAsPaidDialogProps) {
	const {
		form,
		isLoadingMarkInstallmentAsPaid,
		isMarkInstallmentAsPaidModalOpen,
		setIsMarkInstallmentAsPaidModalOpen,
	} = useMarkInstallmentAsPaid(installment.id);

	const { bankAccounts, creditCards, isLoadingGetBankAccounts } =
		useGetBankAccounts();

	const paymentMethods = [
		...bankAccounts.map((account) => ({
			label: account.name,
			value: account.id,
			color: account.color,
		})),
		...creditCards.map((card) => ({
			label: card.name,
			value: card.id,
			color: card.color,
		})),
	];

	return (
		<Dialog
			open={isMarkInstallmentAsPaidModalOpen}
			onOpenChange={setIsMarkInstallmentAsPaidModalOpen}
		>
			<DialogTrigger asChild>
				<Switch
					className={installment.isPaid ? "bg-primary" : "bg-input"}
					checked={installment.status === "PAID"}
				/>
			</DialogTrigger>

			<DialogContent className="w-[500px]">
				<DialogHeader>
					<DialogTitle>Marcar Parcela como Paga</DialogTitle>

					<DialogDescription>
						Defina os detalhes de como esta parcela foi paga.
					</DialogDescription>
				</DialogHeader>

				<Form {...form}>
					<form
						onSubmit={form.handleSubmitForm}
						className="space-y-6 flex-1 flex flex-col"
					>
						<FormCheckbox
							form={form}
							entity="generateTransaction"
							label="Gerar Transação"
						/>

						{form.watch("generateTransaction") && (
							<>
								{isLoadingGetBankAccounts && (
									<FormInputSkeleton
										label="Forma de Pagamento"
										message="Carregando formas de pagamento"
									/>
								)}

								{!isLoadingGetBankAccounts && (
									<FormBankAccountCombobox
										form={form}
										entity="bankAccountId"
										translatedEntity="Forma de Pagamento"
										placeholder="Selecione uma forma de pagamento"
										emptyMessage="Nenhuma forma de pagamento encontrada"
										options={paymentMethods}
									/>
								)}
							</>
						)}

						<DialogFooter>
							<DialogClose asChild>
								<Button variant="outline">Cancelar</Button>
							</DialogClose>

							<SubmitButton isLoading={isLoadingMarkInstallmentAsPaid}>
								Confirmar
							</SubmitButton>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
}
