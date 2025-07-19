"use client";
import Image from "next/image";
import Link from "next/link";
import { z } from "zod";
import { useSignIn } from "@/hooks/auth/use-sign-in";
import { FormInput } from "../form/form-input";
import { Button } from "../ui/button";
import { Form } from "../ui/form";

export const signInSchema = z.object({
	email: z.string().email("Email inválido"),
	password: z.string().min(8, "Senha deve ter pelo menos 8 caracteres"),
});

export function SignInForm() {
	const { form, isLoadingSignIn } = useSignIn();

	return (
		<div className="w-[400px]">
			<Form {...form}>
				<form onSubmit={form.handleSubmitForm} className="space-y-6">
					<div className="flex flex-col">
						<h1 className="text-2xl font-bold">Conecte-se</h1>
						<span className="text-muted-foreground text-sm font-medium">
							Novo por aqui?{" "}
							<Button variant="link" className="p-0" asChild>
								<Link href="/cadastro" className="text-black font-medium">
									Cadastre-se
								</Link>
							</Button>
						</span>
					</div>

					<FormInput
						form={form}
						entity="email"
						label="Email"
						placeholder="Digite seu email"
						type="email"
					/>

					<FormInput
						form={form}
						entity="password"
						label="Senha"
						placeholder="Digite sua senha"
						type="password"
					/>

					<Button type="submit" className="w-full" isLoading={isLoadingSignIn}>
						Entrar
					</Button>

					<Button className="w-full" variant="outline">
						<Image src="/google.svg" alt="Google" width={20} height={20} />
						Entrar com Google
					</Button>
				</form>
			</Form>
		</div>
	);
}
