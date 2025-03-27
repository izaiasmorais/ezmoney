import React from "react";
import { Button } from "@/components/ui/button";
import { CreateInvoiceForm } from "./create-invoice-form";
import { InvoicePreview } from "./invoice-preview";

export function AddInvoiceModal() {
	return (
		<div className="w-full min-h-screen p-6 space-y-4">
			<div className="flex justify-between items-center">
				<h1 className="text-2xl font-bold">Criar Conta</h1>

				<div className="flex items-center gap-4">
					<Button variant="ghost">Cancelar</Button>

					<Button type="submit" form="create-invoice-form">
						Confirmar
					</Button>
				</div>
			</div>

			<div className="flex flex-col lg:flex-row gap-6">
				<CreateInvoiceForm />

				<InvoicePreview />
			</div>
		</div>
	);
}
