import { InvoicesSummary } from "@/components/invoices/invoices-summary/invoices-summary";
import { InvoicesTableContainer } from "@/components/invoices/invoices-table/invoices-table-container";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contas - EZMoney",
	description: "Gerencie suas contas de forma fácil e rápida",
	keywords: ["Contas", "EZMoney", "Finanças", "Controle Financeiro"],
};

export default function Page() {
	return (
		<div className="w-full flex flex-col gap-4">
			<InvoicesSummary />
			<InvoicesTableContainer />
		</div>
	);
}
