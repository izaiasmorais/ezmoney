import { z } from "zod";

export const transactionRequestSchema = z.object({
	name: z.string().min(1, "O nome da transação é obrigatório"),
	value: z.coerce
		.number()
		.refine((val) => val !== 0, "O valor da transação não pode ser zero"),
	createdAt: z.string().min(1, "A data da transação é obrigatória"),
	category: z.string().min(1, "A categoria é obrigatória"),
	installment: z.coerce
		.number()
		.int()
		.positive("O número de parcelas não pode ser negativo"),
	type: z.enum(["deposit", "expense", "investment"], {
		message: "O tipo da transação é inválido",
	}),
});

export type TransactionRequest = z.infer<typeof transactionRequestSchema>;
