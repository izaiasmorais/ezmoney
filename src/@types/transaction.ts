export type Transaction = {
	id: string;
	name: string;
	createdAt: string;
	value: number;
	category: string;
	installment: number;
	type: "deposit" | "expense" | "investment";
	userId: string;
};
