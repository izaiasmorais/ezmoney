import { z } from "zod";

export type Invoice = {
	id: string;
	name: string;
	description: string;
	createdAt: string;
	dueDate: string;
	unitValue: number;
	installments: number;
	status: "paid" | "overdue" | "draft" | "pending";
	paymentType: "unique" | "recurring";
	category: "subscription" | "loan" | "purchase" | "general" | "streaming";
};

export const createInvoiceRequestSchema = z.object({
	name: z.string().min(1, "O nome da fatura é obrigatório"),
	description: z.string().optional(),
	createdAt: z.string().optional(),
	dueDate: z.string().min(1, "A data de vencimento é obrigatória"),
	unitValue: z.coerce
		.number({
			message: "O valor da fatura é obrigatório",
		})
		.positive("O valor da fatura deve ser positivo"),
	installments: z.coerce
		.number()
		.int()
		.positive("O número de parcelas deve ser positivo"),
	status: z.enum(["paid", "overdue", "draft", "pending"], {
		message: "O status da fatura é inválido",
	}),
	paymentType: z.enum(["unique", "recurring"], {
		message: "O tipo de pagamento é inválido",
	}),
	category: z.enum(
		["subscription", "loan", "purchase", "general", "streaming"],
		{
			message: "O tipo da categoria é inválido",
		}
	),
});

export type CreateInvoiceRequest = z.infer<typeof createInvoiceRequestSchema>;

export type UpdateInvoiceStatusRequest = {
	invoiceId: string;
	status: Invoice["status"];
};
