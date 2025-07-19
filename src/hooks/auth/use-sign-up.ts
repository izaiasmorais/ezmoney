import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { z } from "zod";
import type { HTTPErrorResponse, HTTPSuccessResponse } from "@/@types/http";
import { api } from "@/lib/axios";
import { useFormMutation } from "../form/use-form-mutation";

export const signUpRequestSchema = z.object({
	name: z.string().min(1, "O Nome é obrigatório"),
	email: z.string().email("O E-mail é inválido"),
	password: z.string().min(8, "A Senha deve ter pelo menos 8 caracteres"),
});

export type SignUpRequest = z.infer<typeof signUpRequestSchema>;

type SignUpApiResponse = HTTPSuccessResponse<null> | HTTPErrorResponse;

export async function signUp(data: SignUpRequest): Promise<SignUpApiResponse> {
	try {
		const response = await api.post<SignUpApiResponse>("/auth/sign-up", data);
		return response.data;
	} catch (error) {
		if (error instanceof AxiosError && error.response?.data) {
			return error.response.data;
		}
		return {
			success: false,
			errors: ["Erro desconhecido"],
			data: null,
		};
	}
}

export function useSignUp() {
	const router = useRouter();

	const form = useFormMutation({
		schema: signUpRequestSchema,
		defaultValues: {
			name: "",
			email: "",
			password: "",
		},
		onSubmit: (data) => {
			signUpFn(data);
		},
	});

	const { mutateAsync: signUpFn, isPending: isLoadingSignUp } = useMutation({
		mutationKey: ["sign-up"],
		mutationFn: signUp,
		onSuccess: (response) => {
			if (response.success) {
				toast.success("Conta criada com sucesso! Faça login para continuar.", {
					action: {
						label: "Fazer login",
						onClick: () => {
							router.push(`/sign-in?email=${form.getValues("email")}`);
						},
					},
				});
				form.reset();
				return;
			}

			for (const error of response.errors) {
				toast.error(error);
			}
		},
	});

	return {
		form,
		isLoadingSignUp,
	};
}
