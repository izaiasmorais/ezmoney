import { Invoice } from "@/@types/invoice";

export interface InvoiceCategoryOption {
	label: string;
	value: Invoice["category"];
}

export const invoiceCategoryOptions: InvoiceCategoryOption[] = [
	{ label: "Assinatura", value: "subscription" },
	{ label: "Empréstimo", value: "loan" },
	{ label: "Compra", value: "purchase" },
	{ label: "Geral", value: "general" },
	{ label: "Streaming", value: "streaming" },
];
