import { api } from "@/lib/axios";

export type InvoiceStatus = "deposit" | "withdrawal" | "invoice" | "payment";

export interface GetInvoicesQuery {
	pageIndex?: number;
	perPage?: number;
	invoiceId?: string | null;
	invoiceName?: string | null;
	createdAt?: string | null;
	dueDate?: string | null;
	status?: string | null;
}

export interface IInvoice {
	invoiceId: string;
	invoiceName: string;
	createdAt: string;
	dueDate: string;
	value: string;
	status: InvoiceStatus;
	installments: string;
}

export interface GetInvoicesResponse {
	invoices: IInvoice[];
	meta: {
		pageIndex: number;
		perPage: number;
		totalCount: number;
	};
}

export async function getInvoices({
	pageIndex,
	perPage = 10,
	invoiceId,
	invoiceName,
	createdAt,
	dueDate,
	status,
}: GetInvoicesQuery) {
	const data = await api.get<IInvoice[]>("/invoices");

	let totalCount;

	const response = await api.get<IInvoice[]>("/invoices", {
		params: {
			invoiceId,
			invoiceName,
			createdAt,
			dueDate,
			status,
			limit: perPage,
			page: pageIndex,
		},
	});

	if (response.data.length < 10) {
		totalCount = response.data.length;
	} else {
		totalCount = data.data.length;
	}

	return {
		invoices: response.data,
		meta: {
			pageIndex,
			perPage,
			totalCount,
		},
	} as GetInvoicesResponse;
}
