"use client";
import { useSignUp } from "@/hooks/use-sign-up";
import { Button } from "../ui/button";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from "../ui/card";
import {
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
	Form,
} from "../ui/form";
import { Input } from "../ui/input";
import { LoaderCircle } from "lucide-react";

export function SignUpForm() {
	const { form, isLoadingSignUp } = useSignUp();

	return (
		<Card className="z-50 max-w-md rounded-lg">
			<CardHeader>
				<CardTitle className="text-lg md:text-xl">Criar conta</CardTitle>

				<CardDescription className="text-xs md:text-sm">
					Preencha os campos abaixo para se registrar
				</CardDescription>
			</CardHeader>

			<CardContent>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmitForm}
						className="space-y-4 w-[400px]"
					>
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Nome</FormLabel>
									<FormControl>
										<Input
											type="text"
											placeholder="Digite seu nome"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input
											type="email"
											placeholder="Digite seu email"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Senha</FormLabel>
									<FormControl>
										<Input
											type="password"
											placeholder="Digite sua senha"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<Button type="submit" className="w-full">
							{isLoadingSignUp && <LoaderCircle className="animate-spin" />}

							{!isLoadingSignUp && "Criar conta"}
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
}
