export interface ITransaction {
	id: string;
	name: string;
	value: number;
	createdAt: Date;
	installment: number;
	type: string;
	category: string;
}
