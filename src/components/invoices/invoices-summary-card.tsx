import { Card } from "../ui/card";
import { File } from "lucide-react";

export function InvoicesSummaryCard() {
	return (
		<Card className="p-6 flex-1 flex gap-6 items-center text-sm">
			<div className="w-12 h-12 border-slate-100 border-4 rounded-full flex items-center justify-center">
				<File size={24} className="" />
			</div>

			<div className="flex flex-col gap-1">
				<strong className="font-semibold text-base">Total</strong>
				<p className="text-slate-400 font-medium">20 invoices</p>
				<strong className="font-semibold">R$ 718.70</strong>
			</div>
		</Card>
	);
}
