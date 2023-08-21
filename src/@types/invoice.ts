export interface IInvoice {
	id: string;
	name: string;
	createdAt: Date;
	dueDate: Date;
	value: number;
	installments: number;
	status: string;
}
