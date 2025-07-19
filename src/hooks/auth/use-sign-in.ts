import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { z } from "zod";
import type { HTTPErrorResponse, HTTPSuccessResponse } from "@/@types/http";
import { api } from "@/lib/axios";
import { useAuthStore } from "@/stores/auth";
import { useFormMutation } from "../form/use-form-mutation";

export const signInRequestSchema = z.object({
	email: z.string().email("O E-mail inválido"),
	password: z.string().min(8, "A Senha deve ter pelo menos 8 caracteres"),
});

export const signInResponseSchema = z.object({
	accessToken: z.string(),
});

export type SignInRequest = z.infer<typeof signInRequestSchema>;
export type SignInResponse = z.infer<typeof signInResponseSchema>;

type SignInApiResponse =
	| HTTPSuccessResponse<SignInResponse>
	| HTTPErrorResponse;

export async function signIn(data: SignInRequest): Promise<SignInApiResponse> {
	try {
		const response = await api.post<HTTPSuccessResponse<SignInResponse>>(
			"/auth/sign-in",
			data
		);
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

export function useSignIn() {
	const router = useRouter();

	const authenticate = useAuthStore((state) => state.authenticate);

	const form = useFormMutation({
		schema: signInRequestSchema,
		defaultValues: {
			email: "",
			password: "",
		},
		onSubmit: (data) => {
			signInFn(data);
		},
	});

	const { mutateAsync: signInFn, isPending: isLoadingSignIn } = useMutation({
		mutationKey: ["sign-in"],
		mutationFn: signIn,
		onSuccess: (response) => {
			if (response.success) {
				form.reset();
				authenticate(response.data.accessToken);
				router.push("/");
				return;
			}

			for (const error of response.errors) {
				toast.error(error);
			}
		},
	});

	return {
		form,
		isLoadingSignIn,
	};
}
