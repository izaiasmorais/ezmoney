"use client";
import React from "react";
import { CreateInvoiceForm } from "./create-invoice-form";
import { InvoicePreview } from "./invoice-preview";
import { useCreateInvoice } from "@/hooks/invoices/use-create-invoice";

export function CreateInvoiceContainer() {
	const { form, isLoadingCreateInvoice } = useCreateInvoice();

	return (
		<div className="w-full min-h-screen space-y-4">
			<h1 className="text-2xl font-bold">Criar Conta</h1>

			<div className="flex flex-col lg:flex-row gap-6">
				<CreateInvoiceForm
					form={form}
					handleSubmitForm={form.handleSubmitForm}
					isLoadingCreateInvoice={isLoadingCreateInvoice}
				/>

				<InvoicePreview form={form} />
			</div>
		</div>
	);
}
