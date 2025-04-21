"use client";
import React from "react";
import { InvoiceForm } from "../form/invoice-form";
import { useCreateInvoice } from "@/hooks/invoices/use-create-invoice";
import { useRouter } from "next/navigation";
import { InvoiceExportButtons } from "./invoice-export-buttons";
import { InvoiceDetailsCard } from "../dialogs/invoice-details-card";

export function CreateInvoiceContainer() {
	const { form, isLoadingCreateInvoice } = useCreateInvoice();
	const router = useRouter();

	return (
		<div className="w-full min-h-screen space-y-4">
			<h1 className="text-2xl font-bold">Criar Conta</h1>

			<div className="flex flex-col lg:flex-row gap-6">
				<InvoiceForm
					form={form}
					handleSubmitForm={form.handleSubmitForm}
					isLoadingCreateInvoice={isLoadingCreateInvoice}
					onClickCancel={() => router.push("/contas")}
				/>

				<div className="w-full lg:w-1/2 border border-muted rounded-lg p-6 bg-sidebar">
					<div className="flex justify-between items-center mb-6">
						<h2 className="text-sm font-semibold text-muted-foreground">
							PRÉ-VIZUALIZAÇÃO
						</h2>

						<InvoiceExportButtons />
					</div>

					<InvoiceDetailsCard
						name={form.watch("name")}
						dueDate={form.watch("dueDate")}
						unitValue={form.watch("unitValue")}
						installments={form.watch("installments")}
					/>
				</div>
			</div>
		</div>
	);
}
