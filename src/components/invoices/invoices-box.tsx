"use client";
import { Card } from "../ui/card";
import { InvoicesTypeSelect } from "./invoices-type-select";
import { InvoicesTable } from "./invoices-table";
import { Input } from "../ui/input";
import { InvoicesStatusSelect } from "./invoices-status-select";
import { RangeDataPicker } from "../global/range-data-picker";

export function InvoicesBox() {
	return (
		<Card>
			<div className="p-6 flex flex-wrap items-center gap-6 justify-between">
				<div className="flex flex-wrap gap-6">
					<InvoicesStatusSelect />
					<InvoicesTypeSelect />
					<RangeDataPicker />
				</div>
				<Input placeholder="Search invoices..." className="max-w-[500px]" />
			</div>
			<InvoicesTable />
		</Card>
	);
}
