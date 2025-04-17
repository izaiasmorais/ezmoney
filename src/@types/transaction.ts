import { z } from "zod";

export type Transaction = {
	id: string;
	name: string;
	createdAt: string;
	value: number;
	category: string;
	installment: number;
	type: "deposit" | "expense" | "investment";
	userId: string;
};

export const createTransactionSchema = z.object({
	name: z.string().min(1, "O nome da transação é obrigatório"),
	value: z.coerce
		.number()
		.refine((val) => val !== 0, "O valor da transação não pode ser zero"),
	category: z.string().min(1, "A categoria é obrigatória"),
	installment: z.coerce.number().int().positive(),
	type: z.enum(["deposit", "expense", "investment"], {
		message: "O tipo da transação é inválido",
	}),
});

export type CreateTransactionRequest = z.infer<typeof createTransactionSchema>;

export const updateTransactionSchema = z.object({
	name: z.string().min(1, "O nome da transação é obrigatório").optional(),
	value: z.coerce
		.number()
		.refine((val) => val !== 0, "O valor da transação não pode ser zero")
		.optional(),
	category: z.string().min(1, "A categoria é obrigatória").optional(),
	installment: z.coerce.number().int().positive().optional(),
	type: z
		.enum(["deposit", "expense", "investment"], {
			message: "O tipo da transação é inválido",
		})
		.optional(),
});

export type UpdateTransactionRequest = z.infer<typeof updateTransactionSchema>;
