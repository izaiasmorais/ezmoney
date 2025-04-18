import { FormCombobox } from "@/components/form/form-combobox";
import { FormDatePicker } from "@/components/form/form-date-picker";
import { FormInput } from "@/components/form/form-input";
import { FormMoneyInput } from "@/components/form/form-money-input";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useFormMutation } from "@/hooks/use-form-mutation";
import { invoiceCategoryOptions } from "@/mocks/invoice-category-options";
import { transactionTypesOptions } from "@/mocks/transaction-types-options";
import { Loader } from "lucide-react";

interface TransactionFormProps {
	form: ReturnType<typeof useFormMutation<any>>;
	isLoadingCreateTransaction: boolean;
	setIsCreateTransactionSheetOpen: (open: boolean) => void;
}

export function TransactionForm({
	form,
	isLoadingCreateTransaction,
	setIsCreateTransactionSheetOpen,
}: TransactionFormProps) {
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmitForm}
				className="flex flex-col gap-4 px-4 md:px-6"
			>
				<FormInput
					form={form}
					entity="name"
					label="Nome"
					placeholder="Digite o nome da transação"
					type="text"
				/>

				<FormMoneyInput
					form={form}
					entity="value"
					label="Valor"
					placeholder="Digite o valor da transação"
				/>

				<FormDatePicker
					form={form}
					entity="createdAt"
					label="Data"
					placeholder="Selecione a data"
				/>

				<FormInput
					form={form}
					entity="installment"
					label="Parcela"
					placeholder="Digite o número da parcela"
					type="number"
				/>

				<FormCombobox
					form={form}
					options={invoiceCategoryOptions}
					entity="category"
					translatedEntity="Categoria"
					placeholder="Selecione a categoria"
					emptyMessage="Nenhuma categoria encontrada."
				/>

				<FormCombobox
					form={form}
					options={transactionTypesOptions}
					entity="type"
					translatedEntity="Tipo"
					placeholder="Selecione o tipo"
					emptyMessage="Nenhum tipo encontrado."
				/>

				<div className="flex items-center gap-6 py-4 justify-end">
					<Button
						type="button"
						variant="secondary"
						className="md:w-[150px]"
						disabled={isLoadingCreateTransaction}
						onClick={() => setIsCreateTransactionSheetOpen(false)}
					>
						Cancelar
					</Button>

					<Button
						type="submit"
						disabled={isLoadingCreateTransaction}
						className="md:w-[150px]"
					>
						{isLoadingCreateTransaction && (
							<Loader className="mr-2 h-4 w-4 animate-spin" />
						)}
						Confirmar
					</Button>
				</div>
			</form>
		</Form>
	);
}
