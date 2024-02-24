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
	pageIndex = 1,
	perPage = 10,
	invoiceId,
	invoiceName,
	createdAt,
	dueDate,
	status,
}: GetInvoicesQuery) {
	const invoices = await api.get<IInvoice[]>("/invoices");

	const totalCount = invoices.data.length;

	const response = await api.get<IInvoice[]>("/invoices", {
		params: {
			invoiceId,
			invoiceName,
			createdAt,
			dueDate,
			status,
			limit: perPage,
			page: pageIndex !== 1 ? pageIndex + 1 : pageIndex,
		},
	});

	return {
		invoices: response.data,
		meta: {
			pageIndex: 1,
			perPage: 10,
			totalCount,
		},
	} as GetInvoicesResponse;
}
