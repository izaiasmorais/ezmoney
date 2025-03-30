import { z } from "zod";
import { useFormMutation } from "./use-form-mutation";

const profileSchema = z.object({
	avatarUrl: z.string().url({ message: "URL inválida" }),
	name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
	email: z.string().email({ message: "Email inválido" }),
});

export function useEditProfile() {
	const form = useFormMutation({
		schema: profileSchema,
		defaultValues: {
			name: "",
			email: "",
			avatarUrl: "",
		},
		onSubmit: (data) => {
			console.log(data);
		},
	});

	return {
		form,
	};
}
