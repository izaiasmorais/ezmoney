export function formatInvoiceCategories(category: string): string {
	const categories: Record<string, string> = {
		Total: "Total",
		Paid: "Pago",
		Overdue: "Atrasado",
		Pending: "Pendente",
		Draft: "Rascunho",
	};

	return categories[category] || category;
}
