import { z } from "zod";

const envSchema = z.object({
	DATABASE_URL: z.string().url("DATABASE_URL deve ser uma URL válida"),
	GOOGLE_CLIENT_ID: z.string().min(1, "GOOGLE_CLIENT_ID é obrigatório"),
	GOOGLE_CLIENT_SECRET: z.string().min(1, "GOOGLE_CLIENT_SECRET é obrigatório"),
	BETTER_AUTH_SECRET: z.string().min(1, "BETTER_AUTH_SECRET é obrigatório"),
});

export const env = envSchema.parse(process.env);
