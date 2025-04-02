import React from "react";
import { CreateInvoiceForm } from "./create-invoice-form";
import { InvoicePreview } from "./invoice-preview";

export function CreateInvoiceContainer() {
	return (
		<div className="w-full min-h-screen p-6 space-y-4">
			<h1 className="text-2xl font-bold">Criar Conta</h1>

			<div className="flex flex-col lg:flex-row gap-6">
				<CreateInvoiceForm />

				<InvoicePreview />
			</div>
		</div>
	);
}
