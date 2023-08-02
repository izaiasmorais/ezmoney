import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Badge } from "../ui/badge";
import { Banknote } from "lucide-react";

export function TransactionsTable() {
	return (
		<Table>
			<TableHeader className="bg-slate-100 dark:bg-slate-800">
				<TableRow className="border-none">
					<TableHead>Transaction</TableHead>
					<TableHead>Value</TableHead>
					<TableHead>Date</TableHead>
					<TableHead>Installment</TableHead>
					<TableHead>Type</TableHead>
				</TableRow>
			</TableHeader>

			<TableBody>
				<TableRow className="border-none">
					<TableCell className="font-medium flex items-center gap-2">
						<div
							className="w-10 h-10 bg-slate-100 dark:bg-slate-800 flex items-center
						justify-center rounded-md"
						>
							<Banknote size={24} />
						</div>
						Things at supermarket
					</TableCell>
					<TableCell>$ 999.999.999,99</TableCell>
					<TableCell>15/07/2023</TableCell>
					<TableCell>1</TableCell>
					<TableCell>
						<Badge variant="outline">Badge</Badge>
					</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	);
}
