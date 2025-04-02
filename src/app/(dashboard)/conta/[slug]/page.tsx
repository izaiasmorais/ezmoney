import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Conta",
};

interface InvoiceDetailsProps {
	params: {
		slug: string;
	};
}

export default async function Page({ params }: InvoiceDetailsProps) {
	return (
		<div>
			<h1 className="text-2xl font-bold">Conta {params.slug}</h1>
		</div>
	);
}
