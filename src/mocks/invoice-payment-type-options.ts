import { Invoice } from "@/@types/invoice";

export interface InvoicePaymentTypeOption {
	label: string;
	value: Invoice["paymentType"];
}

export const invoicePaymentTypeOptions: InvoicePaymentTypeOption[] = [
	{ label: "Único", value: "unique" },
	{ label: "Recorrente", value: "recurring" },
];
