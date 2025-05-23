import { TransactionsSummary } from "@/components/transactions/summary/transactions-summary";
import { TransactionsTableContainer } from "@/components/transactions/table/transactions-table-container";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Transações - EZMoney",
	description:
		"Gerencie suas transações financeiras com facilidade e eficiência.",
	keywords: ["Transações", "EZMoney", "Finanças", "Controle Financeiro"],
};

export default function Page() {
	return (
		<div className="w-full flex flex-col gap-4">
			<TransactionsSummary />
			<TransactionsTableContainer />
		</div>
	);
}
