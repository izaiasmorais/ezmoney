import { create } from "zustand";
import { IInvoice, IInvoiceParams } from "@/@types/invoice";

interface IInvoiceStore {
	invoices: IInvoice[];
	params: IInvoiceParams;
	addInvoice: (invoice: IInvoice) => void;
	removeInvoice: (id: string) => void;
	setInvoices: (invoices: IInvoice[]) => void;
	onChangePage: (page: number) => void;
	onChangeItemsPerPage: (items: number) => void;
	filterInvoices: (filter: string[]) => void;
}

export const useInvoice = create<IInvoiceStore>((set) => ({
	invoices: [],
	params: {
		filter: [],
		limit: 5,
		page: 1,
		sort: "dueDate",
		order: "asc",
	},
	setInvoices: (invoices) => {
		set({ invoices });
	},
	addInvoice: (invoice) => {
		set((state) => ({
			invoices: [...state.invoices, invoice],
		}));
	},
	removeInvoice: (id) => {
		set((state) => ({
			invoices: state.invoices.filter((invoice) => invoice.id !== id),
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
	filterInvoices: (filter) => {
		set((state) => ({
			params: {
				...state.params,
				filter,
			},
		}));
	},
}));
