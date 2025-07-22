import { Badge } from "@/components/ui/badge";

interface InvoiceStatusProps {
	status: "PENDING" | "PAID" | "OVERDUE" | "DRAFT";
}

function getStatusStyles(status: string) {
	switch (status) {
		case "PENDING":
			return "bg-yellow-50 border-yellow-200 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400";
		case "PAID":
			return "bg-green-50 border-green-200 text-green-700 dark:bg-green-900/20 dark:text-green-400";
		case "OVERDUE":
			return "bg-red-50 border-red-200 text-red-700 dark:bg-red-900/20 dark:text-red-400";
		case "DRAFT":
			return "bg-purple-50 border-purple-200 text-purple-700 dark:bg-purple-900/20 dark:border-purple-900/70 dark:text-purple-400";
		default:
			return "bg-yellow-50 border-yellow-200 text-yellow-700 dark:bg-yellow-900/20 dark:border-yellow-900/70 dark:text-yellow-400";
	}
}

function getStatusLabel(status: string) {
	switch (status) {
		case "PENDING":
			return "Pendente";
		case "PAID":
			return "Pago";
		case "OVERDUE":
			return "Vencido";
		case "DRAFT":
			return "Rascunho";
		default:
			return "Pendente";
	}
}

export function InvoiceStatus({ status }: InvoiceStatusProps) {
	return (
		<Badge
			className={`py-1 px-4 rounded-full w-[90px] border-none ${getStatusStyles(status)}`}
		>
			{getStatusLabel(status)}
		</Badge>
	);
}
