import { useMemo } from "react";
import { Invoice } from "@/@types/invoice";
import { useGetInvoices } from "./use-get-invoices";

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
	isLoading: boolean;
}

export function useInvoicesSummary(): InvoicesSummaryData {
	const { data, isLoadingGetInvoices } = useGetInvoices();

	const summary = useMemo(() => {
		const invoices: Invoice[] = data ? data : [];

		if (!invoices?.length) {
			return {
				totalAmount: "R$ 0,00",
				paidAmount: "R$ 0,00",
				pendingAmount: "R$ 0,00",
				overdueAmount: "R$ 0,00",
				draftAmount: "R$ 0,00",
				totalCount: 0,
				paidCount: 0,
				pendingCount: 0,
				overdueCount: 0,
				draftCount: 0,
			};
		}

		const nonDraftInvoices = invoices.filter(
			(invoice) => invoice.status !== "draft"
		);

		const total = nonDraftInvoices.reduce(
			(sum, invoice) => sum + invoice.unitValue,
			0
		);

		const paid = invoices
			.filter((invoice) => invoice.status === "paid")
			.reduce((sum, invoice) => sum + invoice.unitValue, 0);

		const pending = invoices
			.filter((invoice) => invoice.status === "pending")
			.reduce((sum, invoice) => sum + invoice.unitValue, 0);

		const overdue = invoices
			.filter((invoice) => invoice.status === "overdue")
			.reduce((sum, invoice) => sum + invoice.unitValue, 0);

		const draft = invoices
			.filter((invoice) => invoice.status === "draft")
			.reduce((sum, invoice) => sum + invoice.unitValue, 0);

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
	}, [data]);

	return {
		invoicesData: {
			...summary,
		},
		isLoading: isLoadingGetInvoices,
	};
}
