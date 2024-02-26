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
	perPage = 30,
	invoiceId,
	invoiceName,
	createdAt,
	dueDate,
	status,
}: GetInvoicesQuery) {
	const data = await api.get<IInvoice[]>("/invoices", {
		params: {
			invoiceId,
			invoiceName,
			createdAt,
			dueDate,
			status,
		},
	});

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

	if (data.data.length < 10) {
		totalCount = data.data.length;
	} else if (data.data.length >= 10 && data.data.length < 30) {
		totalCount = data.data.length;
	} else {
		totalCount = 30;
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
