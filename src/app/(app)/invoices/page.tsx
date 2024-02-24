import { InvoiceTable } from "@/components/invoices/invoice-table";

export default function Invoices() {
	return (
		<main className="flex flex-col gap-4">
			{/* <h1 className="text-2xl font-medium flex items-center gap-2">Contas</h1> */}

			<InvoiceTable />
		</main>
	);
}
