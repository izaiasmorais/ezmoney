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
import { Pagination } from "../pagination/Pagination";

export function TransactionsTable() {
	const {
		setTransactions,
		transactions,
		params,
		onChangeItemsPerPage,
		onChangePage,
	} = useTransaction((state) => {
		return {
			setTransactions: state.setTransactions,
			transactions: state.transactions,
			params: state.params,
			onChangePage: state.onChangePage,
			onChangeItemsPerPage: state.onChangeItemsPerPage,
		};
	});

	const { isLoading, isError } = useQuery(
		["transactions", [params.page, params.limit]],
		{
			queryFn: () => getTransactions(params),
			onSuccess: (data) => setTransactions(data),
		}
	);

	if (isLoading) {
		return (
			<div className="flex items-center justify-center p-4">
				<ThreeDots
					height="40"
					width="40"
					radius="9"
					color="#000"
					ariaLabel="three-dots-loading"
					visible={true}
				/>
			</div>
		);
	}

	if (isError && !isLoading) {
		return (
			<div className="flex items-center justify-center p-4 text-lg">
				Ocorreu um erro ao carregar as transações.
			</div>
		);
	}

	if (!isLoading && !isError) {
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

				<div className="px-4 pb-4">
					<Pagination
						currentPage={params.page ? params.page : 1}
						itemsPerPage={params.limit ? params.limit : 5}
						totalItems={15}
						onChangeItemsPerPage={onChangeItemsPerPage}
						onChangePage={onChangePage}
					/>
				</div>
			</>
		);
	}
}
