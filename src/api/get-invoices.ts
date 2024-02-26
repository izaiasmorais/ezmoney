import { api } from "@/lib/axios";

export type InvoiceStatus = "deposit" | "withdrawal" | "invoice" | "payment";

export interface GetInvoicesQuery {
	pageIndex?: number;
	perPage?: number;
	invoiceId?: string | null;
	invoiceName?: string | null;
	createdAt?: Date | null;
	dueDate?: Date | null;
	status?: string | null;
}

export interface IInvoice {
	invoiceId: string;
	invoiceName: string;
	createdAt: Date;
	dueDate: Date;
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
	const data = await api.get<IInvoice[]>("/invoices", {
		params: {
			invoiceId,
			invoiceName,
			status,
		},
	});

	let totalCount;

	const response = await api.get<IInvoice[]>("/invoices", {
		params: {
			invoiceId,
			invoiceName,
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
