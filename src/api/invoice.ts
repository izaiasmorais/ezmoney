import { IInvoice, IInvoiceParams } from "@/@types/invoice";
import { api } from "@/services/axios";

export interface IInvoiceResponse {
	invoicesWithParams: IInvoice[];
	invoices: IInvoice[];
}

export async function getInvoices(
	options: IInvoiceParams = {}
): Promise<IInvoiceResponse> {
	const res = await api.get<IInvoice[]>("/invoices");

	const response = await api.get<IInvoice[]>("/invoices", {
		params: {
			_limit: options.limit ? options.limit : 5,
			_sort: options.sort,
			_page: options.page,
			_order: options.order,
			[options.filter ? options.filter[0] : "_filter"]: options.filter
				? options.filter[1]
				: "",
		},
	});

	return {
		invoicesWithParams: response.data,
		invoices: res.data,
	};
}
