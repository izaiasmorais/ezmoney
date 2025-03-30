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
import Image from "next/image";

export function SignInForm({
	className,
	...props
}: React.ComponentPropsWithoutRef<"div">) {
	const {
		form,
		isLoadingSignIn,
		isLoadingSignInWithGoogle,
		handleSignInWithGoogle,
	} = useSignIn();

	return (
		<div className={cn("flex flex-col gap-6 w-full", className)} {...props}>
			<Card className="border-none shadow-none">
				<CardHeader className="text-center">
					<CardTitle className="text-xl">Bem-vindo</CardTitle>
					<CardDescription>Faça login com sua conta Google</CardDescription>
				</CardHeader>

				<CardContent>
					<Form {...form}>
						<form onSubmit={form.handleSubmitForm} className="space-y-6">
							<div className="flex flex-col gap-4">
								<Button
									type="button"
									variant="outline"
									className="w-full"
									onClick={handleSignInWithGoogle}
									disabled={isLoadingSignInWithGoogle}
									aria-label="Entrar com o Google"
									aria-disabled={isLoadingSignInWithGoogle}
									aria-busy={isLoadingSignInWithGoogle}
								>
									{!isLoadingSignInWithGoogle && (
										<Image
											src={"/google_logo.png"}
											alt="Google Logo"
											width={16}
											height={16}
											quality={100}
											priority
										/>
									)}
									{isLoadingSignInWithGoogle && (
										<LoaderCircle className="animate-spin" />
									)}
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
										<div className="flex items-center justify-between">
											<FormLabel>Senha</FormLabel>
											<Link
												href="/resetar-senha"
												className="text-sm hover:underline underline-offset-4"
											>
												Esqueceu sua senha?
											</Link>
										</div>

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
		</div>
	);
}
