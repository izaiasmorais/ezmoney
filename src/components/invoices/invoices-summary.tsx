import React from "react";
import {
	DollarSign,
	CheckCircle,
	Clock,
	AlertCircle,
	FileText,
} from "lucide-react";
import { InvoicesSummaryItem } from "./invoices-summary-item";

interface InvoicesSummaryProps {
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

export function InvoicesSummary({ invoicesData }: InvoicesSummaryProps) {
	return (
		<div className="w-full shadow-none rounded-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
		xl:grid-cols-5 gap-4">
			<InvoicesSummaryItem
				title="Total"
				amount={invoicesData.totalAmount}
				count={invoicesData.totalCount}
				icon={<DollarSign className="h-5 w-5 text-blue-500" />}
				colorClass="bg-blue-50"
			/>

			<InvoicesSummaryItem
				title="Paid"
				amount={invoicesData.paidAmount}
				count={invoicesData.paidCount}
				icon={<CheckCircle className="h-5 w-5 text-green-500" />}
				colorClass="bg-green-50"
			/>

			<InvoicesSummaryItem
				title="Pending"
				amount={invoicesData.pendingAmount}
				count={invoicesData.pendingCount}
				icon={<Clock className="h-5 w-5 text-yellow-500" />}
				colorClass="bg-yellow-50"
			/>

			<InvoicesSummaryItem
				title="Overdue"
				amount={invoicesData.overdueAmount}
				count={invoicesData.overdueCount}
				icon={<AlertCircle className="h-5 w-5 text-red-500" />}
				colorClass="bg-red-50"
			/>
			<InvoicesSummaryItem
				title="Draft"
				amount={invoicesData.draftAmount}
				count={invoicesData.draftCount}
				icon={<FileText className="h-5 w-5 text-indigo-500" />}
				colorClass="bg-indigo-50"
			/>
		</div>
	);
}
