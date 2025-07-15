import { Badge } from "@/components/ui/badge";

interface InvoiceStatusProps {
	status: "pending" | "paid" | "overdue" | "draft";
}

function getStatusStyles(status: string) {
	switch (status) {
		case "pending":
			return "bg-yellow-950/20 border-yellow-950/70 text-yellow-400";
		case "paid":
			return "bg-green-950/20 border-green-950/70 text-green-400";
		case "overdue":
			return "bg-red-950/20 border-red-950/70 text-red-400";
		case "draft":
			return "bg-purple-950/20 border-purple-950/70 text-purple-400";
		default:
			return "bg-yellow-950/20 border-yellow-950/70 text-yellow-400";
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
