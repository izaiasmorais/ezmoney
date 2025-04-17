import { TransactionsSummary } from "@/components/transactions/summary/transactions-summary";
import { TransactionsTable } from "@/components/transactions/table/transactions-table";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Transações - EZMoney",
	description:
		"Gerencie suas transações financeiras com facilidade e eficiência.",
	keywords: ["Transações", "EZMoney", "Finanças", "Controle Financeiro"],
};

export default function Page() {
	return (
		<div className="w-full p-4 flex flex-col gap-4">
			<TransactionsSummary />
			<TransactionsTable />
		</div>
	);
}
