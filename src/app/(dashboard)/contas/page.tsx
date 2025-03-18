import { InvoicesSummary } from "@/components/invoices/invoices-summary";
import { InvoicesTable } from "@/components/invoices/invoices-table";
import { useInvoices } from "@/hooks/use-invoices";

export default function Page() {
	const { invoicesData } = useInvoices();

	return (
		<div className="w-full p-4 space-y-4">
			<InvoicesSummary invoicesData={invoicesData} />

			<InvoicesTable />
		</div>
	);
}
