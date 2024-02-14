import { InvoiceTable } from "@/components/invoices/invoice-table";
import { InvoiceTableFilters } from "@/components/invoices/invoice-table-filters";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function Invoices() {
	return (
		<main className="flex flex-col gap-6">
			<h1 className="text-2xl font-medium flex items-center gap-2">Invoices</h1>

			<div className="space-y-4">
				<div className="flex items-center justify-between">
					<InvoiceTableFilters />
					<Button className="flex items-center gap-2" size="xs">
						<Plus className="w-5 h-5" />
						Adicionar conta
					</Button>
				</div>

				<InvoiceTable />
			</div>
		</main>
	);
}
