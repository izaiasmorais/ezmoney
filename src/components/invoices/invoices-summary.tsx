"use client";
import { useInvoice } from "@/stores/invoice";
import { InvoicesSummaryCard } from "./invoices-summary-card";
import {
	File,
	FileCheck2,
	FileClock,
	FileInput,
	FileLock2,
} from "lucide-react";

export function InvoicesSummary() {
	const { total, overdue, paid, pending, postponed } = useInvoice(
		(state) => state.invoicesSummary
	);

	return (
		<section
			id="invoices-summary"
			className="w-full grid gap-4 md:gap-6 md:grid-cols-2 xl:grid-cols-5"
		>
			<InvoicesSummaryCard
				icon={File}
				title="Total"
				invoices={total.quantity}
				value={total.value}
			/>
			<InvoicesSummaryCard
				icon={FileCheck2}
				title="Paid"
				invoices={paid.quantity}
				value={paid.value}
			/>
			<InvoicesSummaryCard
				icon={FileInput}
				title="Pending"
				invoices={pending.quantity}
				value={pending.value}
			/>
			<InvoicesSummaryCard
				icon={FileClock}
				title="Overdue"
				invoices={overdue.quantity}
				value={overdue.value}
			/>
			<InvoicesSummaryCard
				icon={FileLock2}
				title="Postponed"
				invoices={postponed.quantity}
				value={postponed.value}
			/>
		</section>
	);
}
