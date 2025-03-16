export type Invoice = {
	id: string;
	name: string;
	createdAt: string;
	dueDate: string;
	value: number;
	installments: number;
	status: "paid" | "overdue" | "draft" | "pending";
	type: "fixed" | "recurring";
};
