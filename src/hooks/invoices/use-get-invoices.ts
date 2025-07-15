import { z } from "zod";

export const invoicesSchema = z.object({
	id: z.string().uuid(),
	name: z.string(),
	description: z.string(),
	unitValue: z.number(),
	installments: z.number(),
	dueDate: z.date(),
	status: z.string(),
	category: z.string(),
	createdAt: z.date(),
	updatedAt: z.date(),
});

export type Invoice = z.infer<typeof invoicesSchema>;
