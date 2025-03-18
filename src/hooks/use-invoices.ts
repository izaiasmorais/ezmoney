import { useMemo } from "react";
import { invoices } from "@/mocks/invoices";

interface InvoicesSummaryData {
	invoicesData: {
		totalAmount: string;
		paidAmount: string;
		pendingAmount: string;
		overdueAmount: string;
		draftAmount: string;
		totalCount: number;
		paidCount: number;
		pendingCount: number;
		overdueCount: number;
		draftCount: number;
	};
}

export function useInvoices(): InvoicesSummaryData {
	const summary = useMemo(() => {
		const total = invoices.reduce((sum, invoice) => sum + invoice.value, 0);

		const paid = invoices
			.filter((invoice) => invoice.status === "paid")
			.reduce((sum, invoice) => sum + invoice.value, 0);

		const pending = invoices
			.filter((invoice) => invoice.status === "pending")
			.reduce((sum, invoice) => sum + invoice.value, 0);

		const overdue = invoices
			.filter((invoice) => invoice.status === "overdue")
			.reduce((sum, invoice) => sum + invoice.value, 0);

		const draft = invoices
			.filter((invoice) => invoice.status === "draft")
			.reduce((sum, invoice) => sum + invoice.value, 0);

		const totalCount = invoices.length;
		const paidCount = invoices.filter(
			(invoice) => invoice.status === "paid"
		).length;
		const pendingCount = invoices.filter(
			(invoice) => invoice.status === "pending"
		).length;
		const overdueCount = invoices.filter(
			(invoice) => invoice.status === "overdue"
		).length;
		const draftCount = invoices.filter(
			(invoice) => invoice.status === "draft"
		).length;

		const formatCurrency = (value: number) =>
			value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

		return {
			totalAmount: formatCurrency(total),
			paidAmount: formatCurrency(paid),
			pendingAmount: formatCurrency(pending),
			overdueAmount: formatCurrency(overdue),
			draftAmount: formatCurrency(draft),
			totalCount,
			paidCount,
			pendingCount,
			overdueCount,
			draftCount,
		};
	}, []);

	return {
		invoicesData: {
			...summary,
		},
	};
}
