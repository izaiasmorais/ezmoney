"use client";
import { cn } from "@/lib/utils";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { useSignIn } from "@/hooks/use-sign-in";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";
import { LoaderCircle } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";

export function SignInForm({
	className,
	...props
}: React.ComponentPropsWithoutRef<"div">) {
	const { form, isLoadingSignIn } = useSignIn();

	return (
		<div className={cn("flex flex-col gap-6", className)} {...props}>
			<Card className="border-none">
				<CardHeader className="text-center">
					<CardTitle className="text-xl">Bem-vindo</CardTitle>
					<CardDescription>Faça login com sua conta Google</CardDescription>
				</CardHeader>

				<CardContent>
					<Form {...form}>
						<form onSubmit={form.handleSubmitForm} className="space-y-6">
							<div className="flex flex-col gap-4">
								<Button variant="outline" className="w-full">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
										<path
											d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
											fill="currentColor"
										/>
									</svg>
									Entrar com o Google
								</Button>
							</div>

							<div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
								<span className="relative z-10 bg-background px-2 text-muted-foreground">
									Ou continue com seu email
								</span>
							</div>

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

							<Button
								type="submit"
								className="w-full"
								disabled={isLoadingSignIn}
							>
								{isLoadingSignIn && <LoaderCircle className="animate-spin" />}
								Entrar
							</Button>

							<div className="text-center text-sm">
								Não tem uma conta?{" "}
								<Link
									href="/cadastro "
									className="underline underline-offset-4"
								>
									Cadastre-se
								</Link>
							</div>
						</form>
					</Form>
				</CardContent>
			</Card>

			<div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary">
				Ao clicar em continuar, você concorda com nossos{" "}
				<a href="#">Termos de Serviço</a> e{" "}
				<a href="#">Política de Privacidade</a>.
			</div>
		</div>
	);
}
