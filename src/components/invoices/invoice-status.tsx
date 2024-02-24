import { InvoiceStatus } from "@/api/get-invoices";

interface InvoiceStatusProps {
	status: InvoiceStatus;
}

const invoiceStatusMap: Record<InvoiceStatus, string> = {
	deposit: "Pendente",
	withdrawal: "Atrasado",
	invoice: "Pago",
	payment: "Adiado",
};

export function InvoiceStatus({ status }: InvoiceStatusProps) {
	return (
		<div className="flex items-center gap-2">
			{status === "deposit" && (
				<div
					className="flex px-2 py-0.5 border bg-yellow-50 border-yellow-200 text-yellow-950 rounded-full
			text-xs font-semibold dark:bg-yellow-950 dark:border-yellow-900 dark:text-yellow-400"
				>
					{invoiceStatusMap[status]}
				</div>
			)}

			{status === "withdrawal" && (
				<div
					className="flex px-2 py-0.5 border bg-red-50 border-red-200 text-red-950 rounded-full
			text-xs font-semibold dark:bg-red-950 dark:border-red-900 dark:text-red-400"
				>
					{invoiceStatusMap[status]}
				</div>
			)}

			{status === "invoice" && (
				<div
					className="flex px-2 py-0.5 border bg-emerald-50 border-emerald-200 text-emerald-950 rounded-full
			text-xs font-semibold dark:bg-emerald-950 dark:border-emerald-900 dark:text-emerald-400"
				>
					{invoiceStatusMap[status]}
				</div>
			)}

			{status === "payment" && (
				<div
					className="flex px-2 py-0.5 border bg-purple-50 border-purple-200 text-purple-950 rounded-full
			text-xs font-semibold dark:bg-purple-950 dark:border-purple-900 dark:text-purple-400"
				>
					{invoiceStatusMap[status]}
				</div>
			)}
		</div>
	);
}
