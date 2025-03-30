import { InvoicesSummary } from "@/components/invoices/invoices-summary";
import { InvoicesTable } from "@/components/invoices/invoices-table";

export default function Page() {
	return (
		<div className="w-full p-4 space-y-4">
			<InvoicesSummary />
			<InvoicesTable />
		</div>
	);
}
