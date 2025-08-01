"use client";
import { Eye } from "lucide-react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import type { Invoice } from "@/hooks/invoices/use-get-invoices";
import { useGetInvoiceInstallments } from "@/hooks/invoices/use-get-invoices-installments";
import { formatFromNow } from "@/utils/form-from-now";
import { InvoiceStatus } from "../table/status";
import { InvoiceInstallmentsTable } from "./invoice-installments-table";

interface InvoiceDetailsDialogProps {
	invoice: Invoice;
}

export function InvoiceDetailsDialog({ invoice }: InvoiceDetailsDialogProps) {
	const { installments, isLoadingGetInvoiceInstallments } =
		useGetInvoiceInstallments(invoice.id);

	return (
		<Dialog>
			<form>
				<DialogTrigger asChild>
					<DropdownMenuItem
						onSelect={(e) => {
							e.preventDefault();
						}}
					>
						<Eye className="mr-2" />
						Visualizar
					</DropdownMenuItem>
				</DialogTrigger>

				<DialogContent className="mx-6 !w-full !max-w-[900px] h-[500px] p-0 gap-0 flex flex-col mb-0">
					<DialogHeader className="p-4 border-zinc-300 dark:border-zinc-800">
						<DialogTitle className="text-2xl font-medium flex items-center gap-4">
							{invoice.name} <InvoiceStatus status={invoice.status} />
						</DialogTitle>

						<DialogDescription>
							Próximo vencimento em {formatFromNow(invoice.dueDate).date}
						</DialogDescription>
					</DialogHeader>

					<div className="px-4 items-start flex-1 flex flex-col gap-2">
						<div className="w-full max-h-[390px] overflow-y-auto">
							<InvoiceInstallmentsTable
								installments={installments}
								isLoadingGetInvoiceInstallments={
									isLoadingGetInvoiceInstallments
								}
							/>
						</div>
					</div>
				</DialogContent>
			</form>
		</Dialog>
	);
}
