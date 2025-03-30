"use client";
import { cn } from "@/lib/utils";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { useSignUp } from "@/hooks/use-sign-up";
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
import Image from "next/image";
import Link from "next/link";

export function SignUpForm({
	className,
	...props
}: React.ComponentPropsWithoutRef<"div">) {
	const {
		form,
		isLoadingSignUp,
		handleSignUpWithGoogle,
		isLoadingSignUpWithGoogle,
	} = useSignUp();

	return (
		<div className={cn("flex flex-col gap-6", className)} {...props}>
			<Card className="border-none shadow-none">
				<CardHeader className="text-center">
					<CardTitle className="text-xl">Crie sua conta</CardTitle>
					<CardDescription>Cadastre-se ou continue com Google</CardDescription>
				</CardHeader>

				<CardContent>
					<Form {...form}>
						<form onSubmit={form.handleSubmitForm} className="space-y-6">
							<div className="flex flex-col gap-4">
								<Button
									type="button"
									variant="outline"
									className="w-full"
									onClick={handleSignUpWithGoogle}
									disabled={isLoadingSignUpWithGoogle}
									aria-label="Cadastre-se com o Google"
									aria-disabled={isLoadingSignUpWithGoogle}
									aria-busy={isLoadingSignUpWithGoogle}
								>
									{!isLoadingSignUpWithGoogle && (
										<Image
											src={"/google_logo.png"}
											alt="Google Logo"
											width={16}
											height={16}
											quality={100}
											priority
										/>
									)}
									{isLoadingSignUpWithGoogle && (
										<LoaderCircle className="animate-spin" />
									)}
									Cadastre-se com o Google
								</Button>
							</div>
							<div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
								<span className="relative z-10 bg-background px-2 text-muted-foreground">
									Ou preencha o formulário
								</span>
							</div>

							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Nome</FormLabel>
										<FormControl>
											<Input
												type="text"
												placeholder="Digite seu nome completo"
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

							<Button
								type="submit"
								className="w-full"
								disabled={isLoadingSignUp}
							>
								{isLoadingSignUp && <LoaderCircle className="animate-spin" />}
								Cadastrar
							</Button>

							<div className="text-center text-sm">
								Já possui uma conta?{" "}
								<Link href="/entrar" className="underline underline-offset-4">
									Entre
								</Link>
							</div>
						</form>
					</Form>
				</CardContent>
			</Card>

			<div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary">
				Ao clicar em cadastrar, você concorda com nossos{" "}
				<a href="#">Termos de Serviço</a> e{" "}
				<a href="#">Política de Privacidade</a>.
			</div>
		</div>
	);
}
