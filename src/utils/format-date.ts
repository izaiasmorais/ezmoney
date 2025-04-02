/**
 * Transforma uma data no formato ISO (ex.: 2025-03-18T00:00:00.000Z) em uma string no formato DD/MM/YYYY (ex.: 18/03/2025).
 * Usa métodos UTC para evitar deslocamento de fuso horário.
 * @param isoDate - A data no formato ISO 8601 (string ou Date).
 * @returns A data formatada como DD/MM/YYYY.
 * @throws Error se a data for inválida.
 */
export function formatDate(isoDate: string | Date): string {
	const date = typeof isoDate === "string" ? new Date(isoDate) : isoDate;

	if (isNaN(date.getTime())) {
		throw new Error("Data inválida");
	}

	const day = String(date.getUTCDate()).padStart(2, "0");
	const month = String(date.getUTCMonth() + 1).padStart(2, "0");
	const year = date.getUTCFullYear();

	return `${day}/${month}/${year}`;
}
