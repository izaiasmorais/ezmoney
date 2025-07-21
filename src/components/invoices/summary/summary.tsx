"use client";
import { FileCheck, FileClock, FileText, FileWarning } from "lucide-react";
import { useGetInvoicesSummary } from "@/hooks/invoices/use-get-invoices-summary";
import { InvoicesSummaryCard } from "./summary-card";
import { InvoicesSummarySkeleton } from "./summary-skeleton";

export function InvoicesSummary() {
	const { summary, isLoadingSummary } = useGetInvoicesSummary();

	if (isLoadingSummary) {
		return <InvoicesSummarySkeleton />;
	}

	return (
		<div className="w-full flex gap-4">
			<InvoicesSummaryCard
				label="Total"
				value={summary.total.value}
				installments={summary.total.count}
				Icon={FileText}
			/>

			<InvoicesSummaryCard
				label="Pagas"
				value={summary.paid.value}
				installments={summary.paid.count}
				Icon={FileCheck}
			/>

			<InvoicesSummaryCard
				label="Pendentes"
				value={summary.pending.value}
				installments={summary.pending.count}
				Icon={FileClock}
			/>

			<InvoicesSummaryCard
				label="Atrasadas"
				value={summary.overdue.value}
				installments={summary.overdue.count}
				Icon={FileWarning}
			/>
		</div>
	);
}
