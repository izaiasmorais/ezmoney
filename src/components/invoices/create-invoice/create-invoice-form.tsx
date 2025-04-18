"use client";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCreateInvoice } from "@/hooks/invoices/use-create-invoice";
import { invoiceStatusOptions } from "@/mocks/invoice-status-options";
import { invoicePaymentTypeOptions } from "@/mocks/invoice-payment-type-options";
import { FormCombobox } from "@/components/form/form-combobox";
import { FormDatePicker } from "@/components/form/form-date-picker";
import { invoiceCategoryOptions } from "@/mocks/invoice-category-options";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import Link from "next/link";
import { FormMoneyInput } from "@/components/form/form-money-input";
import { FormInput } from "@/components/form/form-input";

export function CreateInvoiceForm() {
	const { form, isLoadingCreateInvoice } = useCreateInvoice();

	const totalValue =
		form.watch("unitValue") * form.watch("installments")
			? form.watch("unitValue") * form.watch("installments")
			: 0;

	return (
		<Form {...form}>
			<form
				id="create-invoice-form"
				onSubmit={form.handleSubmitForm}
				className="w-full lg:w-1/2 bg-white rounded-lg border border-muted p-6"
			>
				<div className="mb-8">
					<h2 className="text-sm font-semibold text-gray-500 mb-4">
						DETALHES DA CONTA
					</h2>

					<div className="flex flex-col gap-4">
						<div className="grid md:grid-cols-2 gap-4">
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem className="m-0">
										<FormLabel>Nome da Conta</FormLabel>
										<FormControl>
											<Input placeholder="Ex: Conta de Energia" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormCombobox
								form={form}
								options={invoiceCategoryOptions}
								entity="category"
								translatedEntity="Categoria"
								placeholder="Selecione a categoria"
								emptyMessage="Nenhuma categoria encontrada."
							/>
						</div>

						<div className="grid md:grid-cols-2 gap-4">
							<FormCombobox
								form={form}
								options={invoiceStatusOptions}
								entity="status"
								translatedEntity="Status"
								placeholder="Selecione o status da conta"
								emptyMessage="Nenhum status encontrado."
							/>

							<FormCombobox
								form={form}
								options={invoicePaymentTypeOptions}
								entity="paymentType"
								translatedEntity="Tipo"
								placeholder="Selecione o tipo de conta"
								emptyMessage="Nenhum status encontrado."
							/>
						</div>

						<div className="grid md:grid-cols-2 gap-4">
							<FormDatePicker
								form={form}
								entity="createdAt"
								label="Data de Criação"
								placeholder="Selecione uma Data"
							/>

							<FormDatePicker
								form={form}
								entity="dueDate"
								label="Data de Vencimento"
								placeholder="Selecione uma Data"
							/>
						</div>
					</div>
				</div>

				<div className="mb-8">
					<h2 className="text-sm font-semibold text-gray-500 mb-4">VALOR</h2>

					<div className="border rounded-md mb-4">
						<Table className="w-full">
							<TableHeader>
								<TableRow className="border-b">
									<TableHead className="text-left p-3 text-sm font-medium text-gray-700">
										Valor Unitário
									</TableHead>

									<TableHead className="text-left p-3 text-sm font-medium text-gray-700">
										Parcelas
									</TableHead>

									<TableHead className="text-left p-3 text-sm font-medium text-gray-700">
										Valor Total
									</TableHead>
								</TableRow>
							</TableHeader>

							<TableBody>
								<TableRow>
									<TableCell className="p-3 align-top">
										<FormMoneyInput
											form={form}
											entity="unitValue"
											placeholder="Ex: R$ 1.000,00"
										/>
									</TableCell>

									<TableCell className="p-3 h-full align-top">
										<FormInput
											type="number"
											form={form}
											entity="installments"
											placeholder="Ex: 12"
										/>
									</TableCell>

									<TableCell className="p-3 align-top">
										<div className="h-9 min-w-[150px] rounded-md shadow-xs border p-2 pl-3 bg-slate-100">
											{`R$ ${totalValue}`}
										</div>
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</div>
				</div>

				<div className="mb-8">
					<h2 className="text-sm font-semibold text-gray-500 mb-4">
						OBSERVAÇÕES
					</h2>

					<FormField
						control={form.control}
						name="description"
						render={({ field }) => (
							<FormItem className="m-0">
								<FormControl>
									<Textarea
										placeholder="Ex: Conta de energia referente ao mês de janeiro de 2024."
										rows={3}
										maxLength={250}
										{...field}
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>

					<div className="text-xs text-gray-500 text-right mt-1">0/250</div>
				</div>

				<div className="flex justify-end">
					<div className="flex items-center gap-4">
						<Button
							variant="ghost"
							disabled={isLoadingCreateInvoice}
							className="md:w-[150px]"
							asChild
							onClick={() => form.reset()}
						>
							<Link href="/contas" aria-disabled={isLoadingCreateInvoice}>
								Cancelar
							</Link>
						</Button>

						<Button
							type="submit"
							form="create-invoice-form"
							className="md:w-[150px]"
							disabled={isLoadingCreateInvoice}
							aria-disabled={isLoadingCreateInvoice}
						>
							{isLoadingCreateInvoice && (
								<Loader className="mr-2 h-4 w-4 animate-spin" />
							)}
							Confirmar
						</Button>
					</div>
				</div>
			</form>
		</Form>
	);
}
