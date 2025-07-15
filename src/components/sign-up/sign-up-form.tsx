"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormInput } from "../form/form-input";
import { Button } from "../ui/button";
import { Form } from "../ui/form";

export const signUpSchema = z.object({
	name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
	email: z.string().email("Email inválido"),
	password: z.string().min(8, "Senha deve ter pelo menos 8 caracteres"),
});

export function SignUpForm() {
	const form = useForm({
		resolver: zodResolver(signUpSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
		},
	});

	const onSubmit = (data: z.infer<typeof signUpSchema>) => {
		console.log(data);
	};

	return (
		<div className="w-[400px]">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
					<div className="flex flex-col">
						<h1 className="text-2xl font-bold">Criar conta</h1>
						<span className="text-muted-foreground text-sm font-medium">
							Já tem uma conta?{" "}
							<Button variant="link" className="p-0" asChild>
								<Link href="/entrar" className="text-black font-medium">
									Entrar
								</Link>
							</Button>
						</span>
					</div>

					<FormInput
						form={form}
						entity="name"
						label="Nome"
						placeholder="Digite seu nome"
						type="text"
					/>

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

					<Button type="submit" className="w-full">
						Criar conta
					</Button>

					<Button className="w-full" variant="outline">
						<Image src="/google.svg" alt="Google" width={20} height={20} />
						Criar conta com Google
					</Button>
				</form>
			</Form>
		</div>
	);
}
