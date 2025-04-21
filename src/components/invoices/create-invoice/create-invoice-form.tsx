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
import { invoiceStatusOptions } from "@/mocks/invoice-status-options";
import { invoicePaymentTypeOptions } from "@/mocks/invoice-payment-type-options";
import { FormDatePicker } from "@/components/form/form-date-picker";
import { invoiceCategoryOptions } from "@/mocks/invoice-category-options";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import Link from "next/link";
import { FormMoneyInput } from "@/components/form/form-money-input";
import { FormInput } from "@/components/form/form-input";
import { FormSelect } from "@/components/form/form-select";
import { UseFormReturn } from "react-hook-form";
import { CreateInvoiceRequest } from "@/@types/invoice";

interface CreateInvoiceFormProps {
	form: UseFormReturn<CreateInvoiceRequest>;
	handleSubmitForm: (e?: React.BaseSyntheticEvent) => Promise<void>;
	isLoadingCreateInvoice: boolean;
}

export function CreateInvoiceForm({
	form,
	handleSubmitForm,
	isLoadingCreateInvoice,
}: CreateInvoiceFormProps) {
	const totalValue =
		form.watch("unitValue") * form.watch("installments")
			? form.watch("unitValue") * form.watch("installments")
			: 0;

	return (
		<Form {...form}>
			<form
				id="create-invoice-form"
				onSubmit={handleSubmitForm}
				className="w-full lg:w-1/2 rounded-lg border border-muted p-6"
			>
				<div className="mb-8">
					<h2 className="text-sm font-semibold text-muted-foreground mb-4">
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

							<FormSelect
								form={form}
								options={invoiceCategoryOptions}
								entity="category"
								translatedEntity="Categoria"
								placeholder="Selecione a categoria"
							/>
						</div>

						<div className="grid md:grid-cols-2 gap-4">
							<FormSelect
								form={form}
								options={invoiceStatusOptions}
								entity="status"
								translatedEntity="Status"
								placeholder="Selecione o status da conta"
							/>

							<FormSelect
								form={form}
								options={invoicePaymentTypeOptions}
								entity="paymentType"
								translatedEntity="Tipo"
								placeholder="Selecione o tipo de conta"
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
					<h2 className="text-sm font-semibold mb-4 text-muted-foreground">
						VALOR
					</h2>

					<div className="border rounded-md mb-4 overflow-hidden">
						<Table className="w-full">
							<TableHeader>
								<TableRow className="border-b bg-sidebar">
									<TableHead className="text-left p-3 text-sm font-medium">
										Valor Unitário
									</TableHead>

									<TableHead className="text-left p-3 text-sm font-medium">
										Parcelas
									</TableHead>

									<TableHead className="text-left p-3 text-sm font-medium">
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
										<div className="h-9 min-w-[150px] rounded-md shadow-xs border p-2 pl-3 bg-sidebar">
											{`R$ ${totalValue}`}
										</div>
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</div>
				</div>

				<div className="mb-8">
					<h2 className="text-sm font-semibold text-muted-foreground mb-4">
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
