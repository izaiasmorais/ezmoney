import { Badge } from "@/components/ui/badge";

interface InvoiceStatusProps {
	status: "pending" | "paid" | "overdue" | "draft";
}

function getStatusStyles(status: string) {
	switch (status) {
		case "pending":
			return "bg-yellow-50 border-yellow-200 text-yellow-700 dark:bg-yellow-950/20 dark:border-yellow-950/70 dark:text-yellow-400";
		case "paid":
			return "bg-green-50 border-green-200 text-green-700 dark:bg-green-950/20 dark:border-green-950/70 dark:text-green-400";
		case "overdue":
			return "bg-red-50 border-red-200 text-red-700 dark:bg-red-950/20 dark:border-red-950/70 dark:text-red-400";
		case "draft":
			return "bg-purple-50 border-purple-200 text-purple-700 dark:bg-purple-950/20 dark:border-purple-950/70 dark:text-purple-400";
		default:
			return "bg-yellow-50 border-yellow-200 text-yellow-700 dark:bg-yellow-950/20 dark:border-yellow-950/70 dark:text-yellow-400";
	}
}

function getStatusLabel(status: string) {
	switch (status) {
		case "pending":
			return "Pendente";
		case "paid":
			return "Pago";
		case "overdue":
			return "Vencido";
		case "draft":
			return "Rascunho";
		default:
			return "Pendente";
	}
}

export function InvoiceStatus({ status }: InvoiceStatusProps) {
	return (
		<Badge
			className={`py-1 px-4 rounded-full w-[90px] ${getStatusStyles(status)}`}
		>
			{getStatusLabel(status)}
		</Badge>
	);
}
