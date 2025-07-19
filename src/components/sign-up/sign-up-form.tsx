"use client";
import Image from "next/image";
import Link from "next/link";
import { useSignUp } from "@/hooks/auth/use-sign-up";
import { FormInput } from "../form/form-input";
import { Button } from "../ui/button";
import { Form } from "../ui/form";

export function SignUpForm() {
	const { form, isLoadingSignUp } = useSignUp();

	return (
		<div className="w-[400px]">
			<Form {...form}>
				<form onSubmit={form.handleSubmitForm} className="space-y-6">
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

					<Button type="submit" className="w-full" isLoading={isLoadingSignUp}>
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
