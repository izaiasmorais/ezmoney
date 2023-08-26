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
	filter?: Record<string, any>;
	sort?: string;
	page?: number;
	order?: string;
}
