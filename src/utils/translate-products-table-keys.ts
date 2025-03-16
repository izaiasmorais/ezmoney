/**
 * Translates column keys from the InvoicesTable into human-readable Portuguese labels.
 * @param key - The column key to translate
 * @returns The translated column name in Portuguese
 */
export function translateInvoicesTableKeys(key: string): string {
	const translations: Record<string, string> = {
		select: "Selecionar",
		id: "ID",
		name: "Nome",
		createdAt: "Criado em",
		dueDate: "Vencimento",
		value: "Valor",
		installments: "Parcelas",
		status: "Status",
		type: "Tipo",
		actions: "Ações",
	};

	return translations[key] || key.charAt(0).toUpperCase() + key.slice(1);
}
