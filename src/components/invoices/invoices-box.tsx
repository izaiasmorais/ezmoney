"use client";
import { Card } from "../ui/card";
import { InvoicesStatusSelect } from "./invoices-status-select";
import { InvoicesTypeSelect } from "./invoices-type-select";
import { RangeDataPicker } from "../global/range-data-picker";
import { InvoicesTable } from "./invoices-table";
import { SearchInput } from "../dashboard/search-input";

export function InvoicesBox() {
	return (
		<Card>
			<div className="p-6 flex flex-wrap items-center gap-6 justify-between">
				<div className="flex flex-wrap gap-6">
					<InvoicesStatusSelect />
					<InvoicesTypeSelect />
					<RangeDataPicker />
				</div>
				<SearchInput placeholder="Search invoices..." />
			</div>
			<InvoicesTable />
		</Card>
	);
}
