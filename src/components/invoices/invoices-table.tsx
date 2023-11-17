"use client";
import {
	Table,
	TableBody,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { getInvoices } from "@/api/invoice";
import { useQuery } from "@tanstack/react-query";
import { InvoiceTableItem } from "./invoices-table-item";
import { ThreeDots } from "react-loader-spinner";
import { useInvoice } from "@/stores/invoice";
import { Pagination } from "../pagination/pagination";

export function InvoicesTable() {
	const {
		setInvoices,
		invoices,
		params,
		onChangeItemsPerPage,
		onChangePage,
		totalRecord,
	} = useInvoice((state) => {
		return {
			setInvoices: state.setInvoices,
			invoices: state.invoices,
			params: state.params,
			onChangePage: state.onChangePage,
			onChangeItemsPerPage: state.onChangeItemsPerPage,
			totalRecord: state.totalRecord,
		};
	});

	const { isLoading, isError } = useQuery(["invoices", [params]], {
		queryFn: () => getInvoices(params),
		onSuccess: (data) => setInvoices(data),
	});

	if (isLoading) {
		return (
			<div className="flex items-center justify-center p-4">
				<ThreeDots
					height="40"
					width="40"
					radius="9"
					color="#000"
					ariaLabel="three-dots-loading"
					visible={true}
				/>
			</div>
		);
	}

	if ((isError && !isLoading) || invoices.length === 0) {
		return (
			<div className="flex items-center justify-center p-4 text-lg">
				Não há contas para listar.
			</div>
		);
	}

	if (!isLoading && !isError) {
		return (
			<>
				<Table>
					<TableHeader className="bg-slate-100 dark:bg-slate-800">
						<TableRow className="border-none">
							<TableHead className="w-[506px]">Invoice</TableHead>
							<TableHead>Value</TableHead>
							<TableHead>Create</TableHead>
							<TableHead>Due</TableHead>
							<TableHead>Installments</TableHead>
							<TableHead>Status</TableHead>
							<TableHead>Options</TableHead>
						</TableRow>
					</TableHeader>

					<TableBody>
						{!isLoading &&
							invoices &&
							invoices.map((invoice) => (
								<InvoiceTableItem key={invoice.id} invoice={invoice} />
							))}
					</TableBody>
				</Table>

				<div className="px-4 pb-4">
					<Pagination
						currentPage={params.page ? params.page : 1}
						itemsPerPage={params.limit ? params.limit : 5}
						onChangeItemsPerPage={onChangeItemsPerPage}
						onChangePage={onChangePage}
						totalItems={totalRecord}
					/>
				</div>
			</>
		);
	}
}
