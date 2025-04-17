"use client";
import React from "react";
import {
	DollarSign,
	CheckCircle,
	Clock,
	AlertCircle,
	FileText,
} from "lucide-react";
import { useInvoicesSummary } from "@/hooks/invoices/use-invoices-summary";
import { InvoicesSummarySkeleton } from "./invoices-summary-skeleton";
import { SummaryCard } from "@/components/card/summary-card";

export function InvoicesSummary() {
	const { invoicesData, isLoading } = useInvoicesSummary();

	if (isLoading) {
		return <InvoicesSummarySkeleton />;
	}

	return (
		<div
			className="w-full shadow-none rounded-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
		xl:grid-cols-5 gap-4"
		>
			<SummaryCard
				title="Total"
				amount={invoicesData.totalAmount}
				description={`${invoicesData.totalCount} Contas`}
				icon={<DollarSign className="h-5 w-5 text-blue-500" />}
				backgroundColor="bg-blue-50"
			/>

			<SummaryCard
				title="Paid"
				amount={invoicesData.paidAmount}
				description={`${invoicesData.paidCount} Contas`}
				icon={<CheckCircle className="h-5 w-5 text-green-500" />}
				backgroundColor="bg-green-50"
			/>

			<SummaryCard
				title="Pending"
				amount={invoicesData.pendingAmount}
				description={`${invoicesData.pendingCount} Contas`}
				icon={<Clock className="h-5 w-5 text-yellow-500" />}
				backgroundColor="bg-yellow-50"
			/>

			<SummaryCard
				title="Overdue"
				amount={invoicesData.overdueAmount}
				description={`${invoicesData.overdueCount} Contas`}
				icon={<AlertCircle className="h-5 w-5 text-red-500" />}
				backgroundColor="bg-red-50"
			/>
			<SummaryCard
				title="Draft"
				amount={invoicesData.draftAmount}
				description={`${invoicesData.draftCount} Contas`}
				icon={<FileText className="h-5 w-5 text-indigo-500" />}
				backgroundColor="bg-indigo-50"
			/>
		</div>
	);
}
