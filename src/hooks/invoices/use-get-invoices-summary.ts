"use client";
import { useMemo } from "react";
import { useGetInvoices } from "./use-get-invoices";

export function useGetInvoicesSummary() {
	const { invoices, isLoadingGetInvoices } = useGetInvoices();

	const summary = useMemo(() => {
		const pending = invoices.filter((invoice) => invoice.status === "PENDING");
		const paid = invoices.filter((invoice) => invoice.status === "PAID");
		const overdue = invoices.filter((invoice) => invoice.status === "OVERDUE");

		return {
			total: {
				value: invoices.reduce((acc, invoice) => acc + invoice.unitValue, 0),
				count: invoices.length,
			},
			pending: {
				value: pending.reduce((acc, invoice) => acc + invoice.unitValue, 0),
				count: pending.length,
			},
			paid: {
				value: paid.reduce((acc, invoice) => acc + invoice.unitValue, 0),
				count: paid.length,
			},
			overdue: {
				value: overdue.reduce((acc, invoice) => acc + invoice.unitValue, 0),
				count: overdue.length,
			},
		};
	}, [invoices]);

	return { summary, isLoadingSummary: isLoadingGetInvoices };
}
