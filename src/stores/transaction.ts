import { create } from "zustand";
import { ITransaction } from "@/@types/transaction";

interface ITransactionStore {
	transactions: ITransaction[];
	addTransaction: (transaction: ITransaction) => void;
	removeTransaction: (id: string) => void;
	setTransactions: (transactions: ITransaction[]) => void;
}

export const useTransaction = create<ITransactionStore>((set) => ({
	transactions: [],
	setTransactions: (transactions) => {
		set({ transactions });
	},
	addTransaction: (transaction) => {
		set((state) => ({
			transactions: [...state.transactions, transaction],
		}));
	},
	removeTransaction: (id) => {
		set((state) => ({
			transactions: state.transactions.filter(
				(transaction) => transaction.id !== id
			),
		}));
	},
}));
