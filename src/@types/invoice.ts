export interface IInvoice {
	id: string;
	name: string;
	value: number;
	createdAt: Date;
	dueDate: Date;
	installments: number;
	status: string;
}
