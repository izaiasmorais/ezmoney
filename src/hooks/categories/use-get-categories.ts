import { z } from "zod";

export const categorySchema = z.object({
	id: z.string().uuid(),
	name: z.string().min(1),
	invoicesCount: z.number().int().positive(),
	transactionsCount: z.number().int().positive(),
	createdAt: z.date(),
	updatedAt: z.date(),
});

export type Category = z.infer<typeof categorySchema>;
