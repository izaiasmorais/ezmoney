/**
 * Translates keys from the Invoice type into human-readable Portuguese labels.
 * @param key - The key to translate
 * @returns The translated key name in Portuguese
 */
export function translateInvoicesTableKeys(key: string): string {
	const translations: Record<string, string> = {
		id: "ID",
		name: "Nome",
		description: "Descrição",
		createdAt: "Criado em",
		dueDate: "Vencimento",
		unitValue: "Valor Unitário",
		installments: "Parcelas",
		status: "Status",
		paymentType: "Tipo de Pagamento",
		category: "Categoria",
	};

	return translations[key] || key.charAt(0).toUpperCase() + key.slice(1);
}
