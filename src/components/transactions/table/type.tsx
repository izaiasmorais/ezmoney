import { Badge } from "@/components/ui/badge";

interface TransactionTypeProps {
	type: "INCOME" | "EXPENSE";
}

function getTypeStyles(type: string) {
	switch (type) {
		case "INCOME":
			return "bg-green-50 border-green-200 text-green-700 dark:bg-green-900/20 dark:text-green-400";
		case "EXPENSE":
			return "bg-red-50 border-red-200 text-red-700 dark:bg-red-900/20 dark:text-red-400";
		default:
			return "bg-yellow-50 border-yellow-200 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400";
	}
}

function getTypeLabel(type: string) {
	switch (type) {
		case "INCOME":
			return "Entrada";
		case "EXPENSE":
			return "Saída";
		default:
			return "Desconhecido";
	}
}

export function TransactionType({ type }: TransactionTypeProps) {
	return (
		<Badge
			className={`py-1 px-4 rounded-full w-[90px] border-none ${getTypeStyles(
				type
			)}`}
		>
			{getTypeLabel(type)}
		</Badge>
	);
}
