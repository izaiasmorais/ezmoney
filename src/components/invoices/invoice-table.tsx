"use client";
import {
	Table,
	TableBody,
	TableHead,
	TableHeader,
	TableRow,
} from "../ui/table";
import { InvoiceTableRow } from "./invoice-table-row";
import { Pagination } from "../global/pagination";
import { useQuery } from "@tanstack/react-query";
import { getInvoices } from "@/api/get-invoices";
import { InvoiceTableFilters } from "@/components/invoices/invoice-table-filters";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { subDays } from "date-fns";
import { useSearchParams } from "next/navigation";
import { z } from "zod";

export function InvoiceTable() {
	const [dateRange, setDateRange] = useState<DateRange | undefined>({
		from: subDays(new Date(), 7),
		to: new Date(),
	});

	const searchParams = useSearchParams();

	const invoiceId = searchParams.get("invoiceId");
	const invoiceName = searchParams.get("invoiceName");
	const status = searchParams.get("status");

	const pageIndex = z.coerce
		.number()
		.transform((page) => page - 1)
		.parse(searchParams.get("page") ?? 1);

	const { data: result, isLoading: isLoadingInvoices } = useQuery({
		queryKey: ["invoices", pageIndex, invoiceId, invoiceName, status],
		queryFn: () => getInvoices({ pageIndex, invoiceId, invoiceName, status }),
	});

	console.log(result);

	// function handlePaginate(pageIndex: number) {
	// 	setSearchParams((prev) => {
	// 		prev.set("page", (pageIndex + 1).toString());

	// 		return prev;
	// 	});
	// }

	return (
		<div className="space-y-4">
			<div className="flex items-center justify-between">
				<InvoiceTableFilters
					dateRange={dateRange}
					setDateRange={setDateRange}
				/>

				<Button className="flex items-center gap-2" size="xs">
					<Plus className="w-5 h-5" />
					Adicionar conta
				</Button>
			</div>

			<div className="rounded-md border">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead className="w-[64px]"></TableHead>
							<TableHead className="w-[200px]">Identificador</TableHead>
							<TableHead>Conta</TableHead>
							<TableHead className="w-[180px]">Criação</TableHead>
							<TableHead className="w-[180px]">Validade</TableHead>
							<TableHead className="w-[140px]">Status</TableHead>
							<TableHead className="w-[140px]">Valor</TableHead>
							<TableHead className="w-[140px]">Parcelas</TableHead>
							<TableHead className="w-[164px]"></TableHead>
						</TableRow>
					</TableHeader>

					<TableBody>
						{result &&
							result.invoices.map((invoice) => {
								return (
									<InvoiceTableRow key={invoice.invoiceId} invoice={invoice} />
								);
							})}
					</TableBody>
				</Table>
			</div>

			{result && (
				<Pagination
					pageIndex={result.meta.pageIndex}
					perPage={result.meta.perPage}
					totalCount={result.meta.totalCount}
					onPageChange={() => {}}
				/>
			)}
		</div>
	);
}