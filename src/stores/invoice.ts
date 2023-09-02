import { create } from "zustand";
import { IInvoice, IInvoiceParams } from "@/@types/invoice";
import { IInvoiceResponse } from "@/api/invoice";

interface IInvoiceSummary {
	value: number;
	quantity: number;
}

interface IInvoiceStore {
	invoices: IInvoice[];
	invoicesComplete: IInvoice[];
	totalRecord: number;
	params: IInvoiceParams;
	invoicesSummary: {
		total: IInvoiceSummary;
		paid: IInvoiceSummary;
		overdue: IInvoiceSummary;
		pending: IInvoiceSummary;
		postponed: IInvoiceSummary;
	};
	removeInvoice: (id: string) => void;
	addInvoice: (invoice: IInvoice) => void;
	setInvoices: (params: IInvoiceResponse) => void;
	onChangePage: (page: number) => void;
	onChangeItemsPerPage: (items: number) => void;
	filterInvoices: (filter: string[]) => void;
	summaryInvoices: () => void;
}

export const useInvoice = create<IInvoiceStore>((set, get) => ({
	invoices: [],
	invoicesComplete: [],
	invoicesSummary: {
		total: {
			value: 0,
			quantity: 0,
		},
		paid: {
			value: 0,
			quantity: 0,
		},
		overdue: {
			value: 0,
			quantity: 0,
		},
		pending: {
			value: 0,
			quantity: 0,
		},
		postponed: {
			value: 0,
			quantity: 0,
		},
	},
	totalRecord: 5,
	params: {
		filter: [],
		limit: 5,
		page: 1,
		sort: "dueDate",
		order: "asc",
	},
	setInvoices: (data) => {
		set({ invoices: data.invoicesWithParams });
		set({ invoicesComplete: data.invoices });
		const { params } = get();

		if (params.filter === undefined) {
			set({ totalRecord: data.invoices.length });
		} else {
			set({ totalRecord: data.invoicesWithParams.length });
		}

		get().summaryInvoices();
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
	summaryInvoices: () => {
		let { invoicesComplete } = get();
		const summary = invoicesComplete.reduce(
			(acc, invoice) => {
				acc.total.value += invoice.value;
				acc.total.quantity += 1;
				if (invoice.status === "paid") {
					acc.paid.value += invoice.value;
					acc.paid.quantity += 1;
				} else if (invoice.status === "overdue") {
					acc.overdue.value += invoice.value;
					acc.overdue.quantity += 1;
				} else if (invoice.status === "pending") {
					acc.pending.value += invoice.value;
					acc.pending.quantity += 1;
				} else if (invoice.status === "postponed") {
					acc.postponed.value += invoice.value;
					acc.postponed.quantity += 1;
				}
				return acc;
			},
			{
				total: { value: 0, quantity: 0 },
				paid: { value: 0, quantity: 0 },
				overdue: { value: 0, quantity: 0 },
				pending: { value: 0, quantity: 0 },
				postponed: { value: 0, quantity: 0 },
			}
		);
		set({ invoicesSummary: summary });
	},
}));
