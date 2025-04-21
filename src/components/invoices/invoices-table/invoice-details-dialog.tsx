import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { InvoiceDetailsCard } from "./invoice-details-card";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Invoice } from "@/@types/invoice";
import { Eye } from "lucide-react";
import { InvoiceExportButtons } from "../create-invoice/invoice-export-buttons";

interface InvoiceDetailsDialogProps {
	invoice: Invoice;
}

export function InvoiceDetailsDialog({ invoice }: InvoiceDetailsDialogProps) {
	return (
		<Dialog>
			<DialogTrigger className="w-full">
				<DropdownMenuItem onSelect={(e) => e.preventDefault()}>
					<Eye />
					Ver detalhes
				</DropdownMenuItem>
			</DialogTrigger>

			<DialogContent className="w-full md:!max-w-[800px] bg-muted dark:bg-sidebar overflow-y-auto p-4 md:p-6">
				<DialogHeader>
					<div className="flex items-center justify-between flex-wrap gap-4">
						<DialogTitle className="text-xl">Detalhes da Fatura</DialogTitle>

						<div className="mr-6">
							<InvoiceExportButtons />
						</div>
					</div>
				</DialogHeader>

				<InvoiceDetailsCard
					name={invoice.name}
					dueDate={invoice.dueDate}
					unitValue={invoice.unitValue}
					installments={invoice.installments}
				/>
			</DialogContent>
		</Dialog>
	);
}
