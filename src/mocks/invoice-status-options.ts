import { Invoice } from "@/@types/invoice";

export interface InvoiceStatusOption {
	label: string;
	value: Invoice["status"];
}

export const invoiceStatusOptions: InvoiceStatusOption[] = [
	{ label: "Pago", value: "paid" },
	{ label: "Pendente", value: "pending" },
	{ label: "Atrasado", value: "overdue" },
	{ label: "Rascunho", value: "draft" },
];
