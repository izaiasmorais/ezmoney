import { z } from "zod";
import { useFormMutation } from "../use-form-mutation";

const resetPasswordFormSchema = z.object({
	email: z.string().email("Por favor, insira um email válido"),
});

export function useResetPassword() {
	const form = useFormMutation({
		schema: resetPasswordFormSchema,
		defaultValues: {
			email: "",
		},
		onSubmit: async (data) => {
			console.log(data);
		},
	});

	return {
		form,
	};
}
