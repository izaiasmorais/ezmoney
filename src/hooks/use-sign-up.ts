import { authClient } from "@/lib/auth-client";
import { useFormMutation } from "./use-form-mutation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { z } from "zod";

const signUpFormSchema = z.object({
	name: z.string().min(1, "O nome é obrigatório."),
	email: z.string().email("Digite um email válido."),
	password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres."),
});

export function useSignUp() {
	const router = useRouter();
	const [isLoadingSignUp, setIsLoadingSignUp] = useState(false);
	const form = useFormMutation({
		schema: signUpFormSchema,
		defaultValues: {
			name: "",
			email: "",
			password: "",
		},
		onSubmit: async (data) => {
			await authClient.signUp.email(
				{
					name: data.name,
					email: data.email,
					password: data.password,
				},
				{
					onRequest: () => {
						setIsLoadingSignUp(true);
					},
					onSuccess: () => {
						router.push("/");
					},
					onError: (ctx) => {
						console.log(ctx);
						setIsLoadingSignUp(false);
					},
				}
			);
		},
	});

	return {
		form,
		isLoadingSignUp,
	};
}
