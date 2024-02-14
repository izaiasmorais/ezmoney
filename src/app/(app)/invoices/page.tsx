import { InvoicesTableFilters } from "@/components/invoices/invoices-table-filters";

export default function Invoices() {
	return (
		<main className="flex flex-col gap-6">
			<div className="flex flex-wrap gap-2 justify-between items-center">
				<h1 className="text-2xl font-medium flex items-center gap-2">
					Invoices
				</h1>
			</div>

			<div className="flex flex-col gap-6">
				<div className="space-y-2.5">
					<InvoicesTableFilters />
				</div>
			</div>
		</main>
	);
}
