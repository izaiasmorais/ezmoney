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
import { useCreateInvoice } from "@/hooks/use-create-invoice";
import { invoiceStatusOptions } from "@/mocks/invoice-statuses";
import { invoiceTypeOptions } from "@/mocks/invoice-types";
import { FormCombobox } from "@/components/form/form-combobox";
import { FormDatePicker } from "@/components/form/form-date-picker";

export function CreateInvoiceForm() {
	const { form } = useCreateInvoice();

	const totalValue = form.watch("unitValue") * form.watch("installments");

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
								options={invoiceTypeOptions}
								entity="type"
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
									<TableCell className="p-3">
										<FormField
											control={form.control}
											name="unitValue"
											render={({ field }) => (
												<FormItem className="m-0">
													<FormControl>
														<Input
															type="number"
															placeholder="Ex: R$ 1.000,00"
															className="w-full"
															{...field}
														/>
													</FormControl>

													<FormMessage />
												</FormItem>
											)}
										/>
									</TableCell>

									<TableCell className="p-3 h-full">
										<FormField
											control={form.control}
											name="installments"
											render={({ field }) => (
												<FormItem className="m-0">
													<FormControl>
														<Input
															type="number"
															placeholder="Ex: 12"
															className="w-full"
															{...field}
														/>
													</FormControl>

													<FormMessage />
												</FormItem>
											)}
										/>
									</TableCell>

									<TableCell className="p-3 align-top">
										<Input
											type="string"
											placeholder="Valor Total"
											className="w-full"
											value={totalValue ? `R$ ${totalValue}` : undefined}
											disabled
										/>
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

					<Textarea
						placeholder="Adicione uma observação"
						className="min-h-[100px] resize-none"
					/>

					<div className="text-xs text-gray-500 text-right mt-1">0/250</div>
				</div>

				<div className="flex justify-end">
					<p className="text-lg font-semibold text-gray-700">Total: $0.00</p>
				</div>
			</form>
		</Form>
	);
}
