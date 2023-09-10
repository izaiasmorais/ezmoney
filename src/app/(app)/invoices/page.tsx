import { InvoicesBox } from "@/components/invoices/invoices-box";
import { InvoicesModal } from "@/components/invoices/invoices-modal";
import { InvoicesSummary } from "@/components/invoices/invoices-summary";

export default function Invoices() {
	return (
		<main className="flex flex-col gap-6">
			<div className="flex flex-wrap gap-2 justify-between items-center">
				<h1 className="text-2xl font-medium flex items-center gap-2">
					Invoices
				</h1>

				<InvoicesModal />
			</div>

			<div className="flex flex-col gap-6">
				<InvoicesSummary />
				<InvoicesBox />
			</div>
		</main>
	);
}
