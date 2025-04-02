import { InvoiceDetails } from "@/components/invoices/invoice-details";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "EZMoney - Detalhes da Conta",
	description: "Detalhes da conta",
	keywords: ["Detalhes da Conta", "EZMoney", "Finanças", "Controle Financeiro"],
};

export default function Page({
	params,
}: {
	params: {
		slug: string;
	};
}) {
	const { slug } = params;

	return <InvoiceDetails invoiceId={slug} />;
}
