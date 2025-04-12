import { InvoicesSummary } from "@/components/invoices/invoices-summary/invoices-summary";
import { InvoicesTable } from "@/components/invoices/invoices-table/invoices-table";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contas - EZMoney",
	description: "Gerencie suas contas de forma fácil e rápida",
	keywords: ["Contas", "EZMoney", "Finanças", "Controle Financeiro"],
};

export default function Page() {
	return (
		<div className="w-full p-4 space-y-4">
			<InvoicesSummary />
			<InvoicesTable />
		</div>
	);
}
