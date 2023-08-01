"use client";

import { TransactionsBox } from "@/components/transactions/transactions-box";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Plus } from "lucide-react";

export default function Transaction() {
	return (
		<main className="flex flex-col gap-3">
			<div>
				<h1 className="text-2xl font-medium flex items-center gap-2">
					Transactions
				</h1>
			</div>

			<div className="flex justify-between items-center">
				<Tabs defaultValue="all" className="w-full">
					<TabsList>
						<TabsTrigger value="all">All</TabsTrigger>
						<TabsTrigger value="food">Food</TabsTrigger>
						<TabsTrigger value="transport">Transport</TabsTrigger>
						<TabsTrigger value="invoices">Invoices</TabsTrigger>
						<TabsTrigger value="shopping">Shopping</TabsTrigger>
					</TabsList>
					<TabsContent value="all" className="flex flex-col"></TabsContent>
				</Tabs>

				<Button className="flex items-center justify-center gap-2 max-w-max w-[200px]">
					<Plus size={20} />
					Add Transaction
				</Button>
			</div>

			<TransactionsBox />
		</main>
	);
}
