import { Transaction } from "@/@types/transaction";

interface TypeComboboxOption {
	label: string;
	value: Transaction["type"];
}

export const transactionTypesOptions: TypeComboboxOption[] = [
	{ label: "Depósito", value: "deposit" },
	{ label: "Despesa", value: "expense" },
	{ label: "Investimento", value: "investment" },
];
