import { ITransaction, ITransactionParams } from "@/@types/transaction";
import { api } from "@/services/axios";

export async function getTransactions(
	options: ITransactionParams = {}
): Promise<ITransaction[]> {
	const response = await api.get<ITransaction[]>("/transactions", {
		params: {
			_limit: options.limit ? options.limit : 5,
			...options.filter,
			_sort: options.sort,
			_page: options.page,
			_order: options.order,
		},
	});

	return response.data;
}
