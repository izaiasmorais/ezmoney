"use client";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { transactions } from "@/mocks/transaction";
import { useEffect } from "react";
import { Banknote, MoreVertical } from "lucide-react";
import { format } from "date-fns";
import { Badge } from "../ui/badge";
import { uppercaseFirstLetter } from "@/utils/uppercaseFirstLetter";
import ptBR from "date-fns/locale/pt-BR";

export function TransactionsTable() {
	useEffect(() => {
		console.log(transactions);
	}, []);

	return (
		<Table>
			<TableHeader className="bg-slate-100 dark:bg-slate-800">
				<TableRow className="border-none">
					<TableHead>Transaction</TableHead>
					<TableHead>Value</TableHead>
					<TableHead>Date</TableHead>
					<TableHead>Installment</TableHead>
					<TableHead>Type</TableHead>
					<TableHead></TableHead>
				</TableRow>
			</TableHeader>

			<TableBody>
				{transactions &&
					transactions.map((transaction) => (
						<TableRow
							key={transaction.id}
							className="cursor-pointer border-b-[1px] border-slate-50"
						>
							<TableCell className="font-medium flex items-center gap-2 py-3">
								<div
									className="w-10 h-10 bg-slate-100 dark:bg-slate-800 flex items-center
						justify-center rounded-md"
								>
									<Banknote size={24} />
								</div>
								{transaction.name}
							</TableCell>
							<TableCell>$ {transaction.value}</TableCell>
							<TableCell>
								{format(transaction.createdAt, "dd/MM/yyyy", {
									locale: ptBR,
								})}
							</TableCell>
							<TableCell>{transaction.installment}</TableCell>
							<TableCell>
								<Badge
									variant="outline"
									className={`${
										transaction.type === "expense"
											? "bg-red-100 text-red-950"
											: "bg-green-100 text-green-950"
									} border-none`}
								>
									{uppercaseFirstLetter(transaction.type)}
								</Badge>
							</TableCell>
							<TableCell>
								<div
									className="w-10 h-10 flex items-center justify-center rounded-full
								hover:bg-gray-200 transition-all"
								>
									<MoreVertical size={20} />
								</div>
							</TableCell>
						</TableRow>
					))}
			</TableBody>
		</Table>
	);
}
