import { InvoiceDetails } from "@/components/invoices/invoice-details";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "EZMoney - Detalhes da Conta",
	description: "Detalhes da conta",
	keywords: ["Detalhes da Conta", "EZMoney", "Finanças", "Controle Financeiro"],
};

interface InvoicePageProps {
	params: Promise<{
		slug: string;
	}>;
}

export default async function InvoicePage({ params }: InvoicePageProps) {
	const { slug } = await params;

	return <InvoiceDetails invoiceId={slug} />;
}
