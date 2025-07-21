"use client";
import { Plus } from "lucide-react";
import { FormDatePicker } from "@/components/form/form-date-picker";
import { FormInput } from "@/components/form/form-input";
import { FormInputSkeleton } from "@/components/form/form-input-sleleton";
import { FormMoneyInput } from "@/components/form/form-money-input";
import { SubmitButton } from "@/components/form/form-submit-button";
import { FormTextarea } from "@/components/form/form-textarea";
import { Button } from "@/components/ui/button";
import { Form, FormLabel } from "@/components/ui/form";
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
import { useGetCategories } from "@/hooks/categories/use-get-categories";
import { useCreateInvoice } from "@/hooks/invoices/use-create-invoice";
import { formatCurrency } from "@/utils/format-currency";
import { FormCategoryCombobox } from "./form-category-combobox";

export function CreateInvoiceForm() {
	const {
		form,
		isCreateInvoiceSheetOpen,
		isLoadingCreateInvoice,
		setIsCreateInvoiceSheetOpen,
	} = useCreateInvoice();

	const { categories, isLoadingGetCategories } = useGetCategories();

	return (
		<Sheet
			open={isCreateInvoiceSheetOpen}
			onOpenChange={setIsCreateInvoiceSheetOpen}
		>
			<SheetTrigger asChild>
				<Button className="ml-auto" variant="outline">
					<Plus />
					Criar Fatura
				</Button>
			</SheetTrigger>

			<SheetContent className="w-[700px]">
				<SheetHeader>
					<SheetTitle>Criar Fatura</SheetTitle>
					<SheetDescription>
						Crie uma nova fatura para organizar suas finanças.
					</SheetDescription>
				</SheetHeader>

				<Form {...form}>
					<form
						onSubmit={form.handleSubmitForm}
						className="space-y-4 flex-1	flex flex-col"
					>
						<FormInput
							form={form}
							entity="name"
							label="Nome"
							placeholder="Nome da fatura"
						/>

						<FormTextarea
							form={form}
							entity="description"
							label="Descrição"
							placeholder="Descrição da fatura"
						/>

						<div className="grid grid-cols-2 gap-2">
							<FormDatePicker
								form={form}
								entity="issueDate"
								label="Data de emissão"
								placeholder="Data de emissão"
							/>

							<FormDatePicker
								form={form}
								entity="dueDate"
								label="Data de vencimento"
								placeholder="Data de vencimento"
							/>
						</div>

						<div className="grid grid-cols-3 gap-2">
							<FormMoneyInput
								form={form}
								entity="unitValue"
								label="Valor unitário"
								placeholder="Valor unitário"
							/>

							<FormInput
								form={form}
								type="number"
								entity="totalInstallments"
								label="Total de parcelas"
								placeholder="Total de parcelas"
							/>

							<div className="flex flex-col gap-2">
								<FormLabel>Valor total</FormLabel>

								<div className="border rounded-md p-2 h-9 text-sm">
									{formatCurrency(
										form.watch("unitValue") * form.watch("totalInstallments")
									)}
								</div>
							</div>
						</div>

						{isLoadingGetCategories && (
							<FormInputSkeleton
								label="Categoria"
								message="Carregando categorias"
							/>
						)}

						{!isLoadingGetCategories && (
							<FormCategoryCombobox
								form={form}
								entity="categoryId"
								translatedEntity="Categoria"
								placeholder="Selecione uma categoria"
								emptyMessage="Nenhuma categoria encontrada"
								options={categories.map((category) => ({
									label: category.name,
									value: category.id,
									color: category.color,
								}))}
							/>
						)}

						<SheetFooter>
							<SheetClose asChild>
								<Button variant="outline">Cancelar</Button>
							</SheetClose>

							<SubmitButton isLoading={isLoadingCreateInvoice}>
								Confirmar
							</SubmitButton>
						</SheetFooter>
					</form>
				</Form>
			</SheetContent>
		</Sheet>
	);
}
