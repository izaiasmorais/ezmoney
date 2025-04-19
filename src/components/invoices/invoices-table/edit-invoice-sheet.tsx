"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
import { FormCombobox } from "@/components/form/form-combobox";
import { FormDatePicker } from "@/components/form/form-date-picker";
import { invoiceStatusOptions } from "@/mocks/invoice-status-options";
import { invoicePaymentTypeOptions } from "@/mocks/invoice-payment-type-options";
import { invoiceCategoryOptions } from "@/mocks/invoice-category-options";
import { Loader, SquarePen } from "lucide-react";
import { useForm } from "react-hook-form";
import { useUpdateInvoice } from "@/hooks/invoices/use-update-invoice";
import {
	CreateInvoiceRequest,
	Invoice,
	createInvoiceRequestSchema,
} from "@/@types/invoice";
import { zodResolver } from "@hookform/resolvers/zod";
import { UpdateInvoiceRequest } from "@/api/invoices/update-invoice";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

interface EditInvoiceSheetProps {
	invoice: Invoice;
}

export function EditInvoiceSheet({ invoice }: EditInvoiceSheetProps) {
	const form = useForm<CreateInvoiceRequest>({
		resolver: zodResolver(createInvoiceRequestSchema),
		defaultValues: {
			name: invoice?.name || "",
			description: invoice?.description || "",
			status: invoice?.status || "pending",
			paymentType: invoice?.paymentType || "unique",
			category: invoice?.category || "general",
			createdAt: invoice?.createdAt || new Date().toISOString(),
			dueDate: invoice?.dueDate || new Date().toISOString(),
			unitValue: invoice?.unitValue || 0,
			installments: invoice?.installments || 1,
		},
	});

	const { updateInvoiceFn, isLoadingUpdateInvoiceStatus } = useUpdateInvoice();

	const handleSubmit = async (formData: CreateInvoiceRequest) => {
		const updateRequest: UpdateInvoiceRequest = {
			invoiceId: invoice.id,
			data: formData,
		};

		await updateInvoiceFn(updateRequest);
	};

	const totalValue =
		form.watch("unitValue") * form.watch("installments")
			? form.watch("unitValue") * form.watch("installments")
			: 0;

	return (
		<Sheet>
			<SheetTrigger asChild>
				<DropdownMenuItem onSelect={(e) => e.preventDefault()}>
					<SquarePen />
					Editar
				</DropdownMenuItem>
			</SheetTrigger>

			<SheetContent
				className="w-full sm:max-w-[600px] md:max-w-[800px] overflow-y-auto gap-0
			outline-none"
			>
				<SheetHeader className="p-6">
					<SheetTitle>Editar Conta</SheetTitle>
					<SheetDescription>
						Altere as informações de uma conta.
					</SheetDescription>
				</SheetHeader>

				<Form {...form}>
					<form
						id="edit-invoice-form"
						onSubmit={form.handleSubmit(handleSubmit)}
						className="p-6 py-0 gap-4 flex flex-col h-full"
					>
						<div>
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

								<FormCombobox
									form={form}
									options={invoiceCategoryOptions}
									entity="category"
									translatedEntity="Categoria"
									placeholder="Selecione a categoria"
									emptyMessage="Nenhuma categoria encontrada."
								/>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

						<div>
							<h2 className="text-sm font-semibold text-gray-500 mb-4">
								VALOR
							</h2>

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

											<TableCell className="p-3 h-full align-top">
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
												<div className="h-9 min-w-[150px] rounded-md shadow-xs border p-2 pl-3
												bg-slate-100 dark:bg-sidebar">
													{`R$ ${totalValue}`}
												</div>
											</TableCell>
										</TableRow>
									</TableBody>
								</Table>
							</div>
						</div>

						<div>
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
												className="text-sm"
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

							<div className="text-xs text-gray-500 text-right mt-1">
								{form.watch("description")?.length || 0}/250
							</div>
						</div>

						<SheetFooter
							className="w-full flex p-0 mb-6 flex-row justify-end self-end items-center
						gap-4 flex-wrap"
						>
							<SheetClose asChild>
								<Button
									variant="outline"
									className="w-full sm:w-[200px]"
									disabled={isLoadingUpdateInvoiceStatus}
								>
									Cancelar
								</Button>
							</SheetClose>

							<Button
								type="submit"
								form="edit-invoice-form"
								className="w-full sm:w-[200px]"
								disabled={isLoadingUpdateInvoiceStatus}
							>
								{isLoadingUpdateInvoiceStatus && (
									<Loader className="mr-2 h-4 w-4 animate-spin" />
								)}
								Salvar alterações
							</Button>
						</SheetFooter>
					</form>
				</Form>
			</SheetContent>
		</Sheet>
	);
}
