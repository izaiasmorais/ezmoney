import { create } from "zustand";
import { ITransaction, ITransactionParams } from "@/@types/transaction";

interface ITransactionStore {
	transactions: ITransaction[];
	params: ITransactionParams;
	addTransaction: (transaction: ITransaction) => void;
	removeTransaction: (id: string) => void;
	setTransactions: (transactions: ITransaction[]) => void;
	onChangePage: (page: number) => void;
	onChangeItemsPerPage: (items: number) => void;
}

export const useTransaction = create<ITransactionStore>((set) => ({
	transactions: [],
	params: {
		filter: {},
		limit: 5,
		page: 1,
		sort: "createdAt",
		order: "desc",
	},
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
	onChangePage: (page) => {
		set((state) => ({
			params: {
				...state.params,
				page,
			},
		}));
	},
	onChangeItemsPerPage: (limit) => {
		set((state) => ({
			params: {
				...state.params,
				limit,
			},
		}));
	},
}));
