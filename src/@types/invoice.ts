export interface IInvoice {
	id: string;
	name: string;
	value: number;
	createdAt: Date;
	dueDate: Date;
	installments: number;
	status: string;
}

export interface IInvoiceParams {
	limit?: number;
	filter?: string[];
	sort?: string;
	page?: number;
	order?: string;
}
