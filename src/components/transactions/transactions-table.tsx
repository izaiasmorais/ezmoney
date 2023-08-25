"use client";
import {
	Table,
	TableBody,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { getTransactions } from "@/api/transaction";
import { useQuery } from "@tanstack/react-query";
import { TransactionTableItem } from "./transactions-table-item";
import { ThreeDots } from "react-loader-spinner";
import { useTransaction } from "@/stores/transaction";

export function TransactionsTable() {
	const { setTransactions, transactions } = useTransaction((state) => {
		return {
			setTransactions: state.setTransactions,
			transactions: state.transactions,
		};
	});

	const { isLoading } = useQuery(["transactions"], {
		queryFn: () => getTransactions(),
		onSuccess: (data) => setTransactions(data),
	});

	if (isLoading)
		return (
			<div className="flex items-center justify-center p-4">
				<ThreeDots
					height="80"
					width="80"
					radius="9"
					color="#000"
					ariaLabel="three-dots-loading"
					visible={true}
				/>
			</div>
		);

	return (
		<>
			<Table>
				<TableHeader className="bg-slate-100 dark:bg-slate-800">
					<TableRow className="border-none">
						<TableHead className="w-[506px]">Transaction</TableHead>
						<TableHead>Value</TableHead>
						<TableHead>Date</TableHead>
						<TableHead>Installment</TableHead>
						<TableHead>Type</TableHead>
						<TableHead>Opções</TableHead>
					</TableRow>
				</TableHeader>

				<TableBody>
					{!isLoading &&
						transactions &&
						transactions.map((transaction) => (
							<TransactionTableItem
								key={transaction.id}
								transaction={transaction}
							/>
						))}
				</TableBody>
			</Table>
		</>
	);
}
