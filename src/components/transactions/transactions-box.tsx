"use client";
import { Card } from "../ui/card";
import { TransactionsTypeSelect } from "./transactions-type-select";
import { TransactionsTable } from "./transactions-table";
import { RangeDataPicker } from "../global/range-data-picker";
import { TransactionsCategorySelect } from "./transactions-category-select";
import { SearchInput } from "../global/search-input";

export function TransactionsBox() {
	return (
		<Card>
			<div className="p-6 flex flex-wrap items-center gap-6 justify-between">
				<div className="flex flex-wrap gap-6">
					<TransactionsTypeSelect />
					<TransactionsCategorySelect />
					<RangeDataPicker />
				</div>
				<SearchInput placeholder="Search transactions..." />
			</div>
			<TransactionsTable />
		</Card>
	);
}
