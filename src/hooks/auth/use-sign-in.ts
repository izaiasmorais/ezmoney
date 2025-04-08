import { authClient } from "@/lib/auth-client";
import { useFormMutation } from "../use-form-mutation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { z } from "zod";
import { ErrorContext } from "better-auth/react";
import { toast } from "sonner";

const signInFormSchema = z.object({
	email: z.string().email("Digite um email válido."),
	password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres."),
});

export function useSignIn() {
	const router = useRouter();
	const [isLoadingSignIn, setIsLoadingSignIn] = useState(false);
	const [isLoadingSignInWithGoogle, setIsLoadingSignInWithGoogle] =
		useState(false);

	const form = useFormMutation({
		schema: signInFormSchema,
		defaultValues: {
			email: "",
			password: "",
		},
		onSubmit: async (data) => {
			await authClient.signIn.email(
				{
					email: data.email,
					password: data.password,
				},
				{
					onRequest: () => {
						setIsLoadingSignIn(true);
					},
					onSuccess: () => {
						router.push("/");
					},
					onError: (ctx: ErrorContext) => {
						if (ctx.error.message === "Invalid email or password") {
							toast.error("Email ou senha inválidos.");
						}

						if (ctx.error.message !== "Invalid email or password") {
							toast.error("Ocorreu um erro desconhecido.");
						}

						setIsLoadingSignIn(false);
					},
				}
			);
		},
	});

	async function handleSignInWithGoogle() {
		await authClient.signIn.social(
			{
				provider: "google",
			},
			{
				onRequest: () => {
					setIsLoadingSignInWithGoogle(true);
				},
				onSuccess: (ctx) => {
					console.log(ctx);
				},
				onError: (ctx: ErrorContext) => {
					console.log(ctx);

					setIsLoadingSignInWithGoogle(false);
				},
			}
		);
	}

	return {
		form,
		isLoadingSignIn,
		isLoadingSignInWithGoogle,
		handleSignInWithGoogle,
	};
}
