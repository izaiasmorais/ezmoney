/**
 * Translates column keys from the TransactionsTable into human-readable Portuguese labels.
 * @param key - The column key to translate
 * @returns The translated column name in Portuguese
 */
export function translateTransactionsTableKeys(key: string): string {
	const translations: Record<string, string> = {
		select: "Selecionar",
		id: "ID",
		name: "Nome",
		createdAt: "Criado em",
		value: "Valor",
		category: "Categoria",
		installment: "Parcela",
		type: "Tipo",
		actions: "Ações",
	};

	return translations[key] || key.charAt(0).toUpperCase() + key.slice(1);
}
