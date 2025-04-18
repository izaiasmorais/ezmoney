"use client";
import { useGetInvoices } from "@/hooks/invoices/use-get-invoices";
import { invoiceStatusOptions } from "@/mocks/invoice-status-options";
import { formatToBRL } from "@/utils/format-to-brl";
import { SquarePen, Eye, Printer, Share } from "lucide-react";
import { InvoiceDetailsTable } from "./invoice-details-table";
import { InvoiceDetailsSkeleton } from "./invoice-details-skeleton";
import { TableSelect } from "@/components/table/table-select";

interface InvoiceDetailsProps {
	invoiceId: string;
}

export function InvoiceDetails({ invoiceId }: InvoiceDetailsProps) {
	const { data, isLoadingGetInvoices } = useGetInvoices();

	const invoice = data?.find((invoice) => invoice.id === invoiceId);

	if (isLoadingGetInvoices) {
		return <InvoiceDetailsSkeleton />;
	}

	if (!invoice) {
		return (
			<div className="w-full flex items-center justify-center">
				<div>Conta não encontrada</div>
			</div>
		);
	}

	return (
		<div className="w-full flex p-6 h-full">
			<div className="flex bg-white border border-muted flex-col gap-6 mx-auto w-full rounded-xl p-6">
				<h2 className="text-2xl font-medium">{invoice.name}</h2>

				<div className="w-full flex items-center justify-between">
					<div className="flex items-center gap-4">
						<SquarePen className="w-5 h-5 text-muted-foreground hover:text-black cursor-pointer" />
						<Eye className="w-5 h-5 text-muted-foreground hover:text-black cursor-pointer" />
						<Printer className="w-5 h-5 text-muted-foreground hover:text-black cursor-pointer" />
						<Share className="w-5 h-5 text-muted-foreground hover:text-black cursor-pointer" />
					</div>

					<TableSelect options={invoiceStatusOptions} placeholder="Status" />
				</div>

				<div className="w-full flex items-center justify-between">
					<div className="flex flex-col gap-2 text-sm">
						<strong>Data de Criação</strong>
						<span className="text-muted-foreground">
							{new Date(invoice.createdAt).toLocaleDateString("pt-BR", {
								day: "2-digit",
								month: "2-digit",
								year: "numeric",
							})}
						</span>
					</div>

					<div className="flex flex-col gap-2 text-sm">
						<strong>Data de Vencimento</strong>
						<span className="text-muted-foreground">
							{new Date(invoice.dueDate).toLocaleDateString("pt-BR", {
								day: "2-digit",
								month: "2-digit",
								year: "numeric",
							})}
						</span>
					</div>
				</div>

				<InvoiceDetailsTable invoice={invoice} />

				<div className="w-full flex justify-end">
					<strong>
						Total: {formatToBRL(invoice.installments * invoice.unitValue)}
					</strong>
				</div>
			</div>
		</div>
	);
}
