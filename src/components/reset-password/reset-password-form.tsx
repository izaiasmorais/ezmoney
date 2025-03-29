"use client";
import { cn } from "@/lib/utils";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { useResetPassword } from "@/hooks/use-reset-password";

export function ResetPasswordForm({
	className,
	...props
}: React.ComponentPropsWithoutRef<"div">) {
	const { form } = useResetPassword();

	return (
		<div className={cn("flex flex-col gap-6 w-full", className)} {...props}>
			<Card className="border-none shadow-none">
				<CardHeader className="text-center">
					<CardTitle className="text-xl">Redefinir Senha</CardTitle>
					<CardDescription>
						Digite seu email para receber um link de redefinição de senha
					</CardDescription>
				</CardHeader>

				<CardContent>
					<Form {...form}>
						<form onSubmit={form.handleSubmitForm} className="space-y-6">
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

							<Button type="submit" className="w-full">
								{/* {isLoading && <LoaderCircle className="mr-2 animate-spin" />} */}
								Enviar link de redefinição
							</Button>

							<div className="text-center text-sm">
								Lembrou sua senha?{" "}
								<Link href="/login" className="underline underline-offset-4">
									Voltar para o login
								</Link>
							</div>
						</form>
					</Form>
				</CardContent>
			</Card>
		</div>
	);
}
