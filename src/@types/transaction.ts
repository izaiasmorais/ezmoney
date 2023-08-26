export interface ITransaction {
	id: string;
	name: string;
	value: number;
	createdAt: Date;
	installment: number;
	type: string;
	category: string;
}

export interface ITransactionParams {
	limit?: number;
	filter?: string[];
	sort?: string;
	page?: number;
	order?: string;
}
