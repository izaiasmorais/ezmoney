import { IInvoice, IInvoiceParams } from "@/@types/invoice";
import { api } from "@/services/axios";

export async function getInvoices(
	options: IInvoiceParams = {}
): Promise<IInvoice[]> {
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

	return response.data;
}
