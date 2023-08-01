"use client";
import { Card } from "../ui/card";
import { RecentSalesItem } from "./recent-sales-item";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export function RecentSales() {
	return (
		<Card className="p-6 pb-3 w-[600px] flex-1 flex justify-between flex-col">
			<div>
				<h3 className="font-semibold text-1xl">Recent Sales</h3>
				<p className="text-sm text-slate-500">You made 265 sales this month.</p>

				<div className="flex flex-col gap-2">
					<RecentSalesItem />
					<RecentSalesItem />
					<RecentSalesItem />
					<RecentSalesItem />
					<RecentSalesItem />
				</div>
			</div>

			<div className="flex justify-end mt-4">
				<Button
					variant="link"
					className="flex items-center gap-2 font-semibold text-sm p-0"
				>
					View all sales <ArrowRight size={16} />
				</Button>
			</div>
		</Card>
	);
}
