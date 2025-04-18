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
				icon={
					<DollarSign className="h-5 w-5 text-blue-500 dark:text-blue-300" />
				}
				backgroundColor="bg-blue-50 dark:bg-blue-900/20"
			/>

			<SummaryCard
				title="Paid"
				amount={invoicesData.paidAmount}
				description={`${invoicesData.paidCount} Contas`}
				icon={
					<CheckCircle className="h-5 w-5 text-green-500 dark:text-green-300" />
				}
				backgroundColor="bg-green-50 dark:bg-green-900/20"
			/>

			<SummaryCard
				title="Pending"
				amount={invoicesData.pendingAmount}
				description={`${invoicesData.pendingCount} Contas`}
				icon={
					<Clock className="h-5 w-5 text-yellow-500 dark:text-yellow-300" />
				}
				backgroundColor="bg-yellow-50 dark:bg-yellow-900/20"
			/>

			<SummaryCard
				title="Overdue"
				amount={invoicesData.overdueAmount}
				description={`${invoicesData.overdueCount} Contas`}
				icon={
					<AlertCircle className="h-5 w-5 text-red-500 dark:text-red-300" />
				}
				backgroundColor="bg-red-50 dark:bg-red-900/20"
			/>
			<SummaryCard
				title="Draft"
				amount={invoicesData.draftAmount}
				description={`${invoicesData.draftCount} Contas`}
				icon={
					<FileText className="h-5 w-5 text-violet-500 dark:text-violet-300" />
				}
				backgroundColor="bg-violet-50 dark:bg-violet-900/20"
			/>
		</div>
	);
}
