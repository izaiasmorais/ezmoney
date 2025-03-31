"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { CreateInvoiceForm } from "./create-invoice-form";
import { InvoicePreview } from "./invoice-preview";
import { useCreateInvoice } from "@/hooks/use-create-invoice";
import { Loader } from "lucide-react";
import Link from "next/link";

export function AddInvoiceModal() {
	const { isLoadingCreateInvoice } = useCreateInvoice();

	return (
		<div className="w-full min-h-screen p-6 space-y-4">
			<div className="flex justify-between items-center">
				<h1 className="text-2xl font-bold">Criar Conta</h1>

				<div className="flex items-center gap-4">
					<Link href="/contas" aria-disabled={isLoadingCreateInvoice}>
						<Button variant="ghost" disabled={isLoadingCreateInvoice}>
							Cancelar
						</Button>
					</Link>

					<Button
						type="submit"
						form="create-invoice-form"
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

			<div className="flex flex-col lg:flex-row gap-6">
				<CreateInvoiceForm />

				<InvoicePreview />
			</div>
		</div>
	);
}
