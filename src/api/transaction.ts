import { ITransaction } from "@/@types/transaction";
import { api } from "@/services/axios";

interface TransactionOptions {
	limit?: number;
	filter?: Record<string, any>;
	sort?: string;
	page?: number;
}

export async function getTransactions(
	options: TransactionOptions = {}
): Promise<ITransaction[]> {
	const response = await api.get<ITransaction[]>("/transactions", {
		params: {
			_limit: options.limit ? options.limit : 5,
			...options.filter,
			_sort: options.sort,
			_page: options.page,
		},
	});

	return response.data;
}
