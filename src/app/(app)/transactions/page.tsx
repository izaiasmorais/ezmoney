"use client";

import { TransactionsBox } from "@/components/transactions/transactions-box";
import { TransactionsModal } from "@/components/transactions/transactions-modal";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function Transaction() {
	return (
		<main className="flex flex-col gap-3">
			<div>
				<h1 className="text-2xl font-medium flex items-center gap-2">
					Transactions
				</h1>
			</div>

			<div className="flex flex-wrap gap-2 justify-between items-center">
				<Tabs defaultValue="all">
					<TabsList>
						<TabsTrigger value="all">All</TabsTrigger>
						<TabsTrigger value="food">Food</TabsTrigger>
						<TabsTrigger value="transport">Transport</TabsTrigger>
						<TabsTrigger value="invoices">Invoices</TabsTrigger>
						<TabsTrigger value="shopping">Shopping</TabsTrigger>
					</TabsList>
					<TabsContent value="all" className="flex flex-col"></TabsContent>
				</Tabs>

				<TransactionsModal />
			</div>

			<TransactionsBox />
		</main>
	);
}
