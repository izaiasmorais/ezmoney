import { authClient } from "@/lib/auth-client";
import { useFormMutation } from "./use-form-mutation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { z } from "zod";
import { ErrorContext } from "better-auth/react";

const signUpFormSchema = z.object({
	name: z.string().min(1, "O nome é obrigatório."),
	email: z.string().email("Digite um email válido."),
	password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres."),
});

export function useSignUp() {
	const router = useRouter();
	const [isLoadingSignUp, setIsLoadingSignUp] = useState(false);
	const [isLoadingSignUpWithGoogle, setIsLoadingSignUpWithGoogle] =
		useState(false);
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

	async function handleSignUpWithGoogle() {
		await authClient.signIn.social(
			{
				provider: "google",
			},
			{
				onRequest: () => {
					setIsLoadingSignUpWithGoogle(true);
				},
				onSuccess: (ctx) => {
					console.log(ctx);
				},
				onError: (ctx: ErrorContext) => {
					console.log(ctx);

					setIsLoadingSignUpWithGoogle(false);
				},
			}
		);
	}

	return {
		form,
		isLoadingSignUp,
		isLoadingSignUpWithGoogle,
		handleSignUpWithGoogle,
	};
}
