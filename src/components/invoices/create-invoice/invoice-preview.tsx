"use client";
import { UseFormReturn } from "react-hook-form";
import { CreateInvoiceRequest } from "@/@types/invoice";
import { InvoiceDetailsCard } from "../invoices-table/invoice-details-card";
import { InvoiceExportButtons } from "./invoice-export-buttons";

interface InvoicePreviewProps {
	form: UseFormReturn<CreateInvoiceRequest>;
}

export function InvoicePreview({ form }: InvoicePreviewProps) {
	return (
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
	);
}
