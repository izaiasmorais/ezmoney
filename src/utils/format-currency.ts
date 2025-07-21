/**
 * Formata um valor numérico em reais (BRL) com o padrão brasileiro.
 * @param value - O valor numérico a ser formatado
 * @returns O valor formatado como string no formato "R$ X.XXX,XX"
 */
export function formatCurrency(value: number): string {
	return value.toLocaleString("pt-BR", {
		style: "currency",
		currency: "BRL",
	});
}
