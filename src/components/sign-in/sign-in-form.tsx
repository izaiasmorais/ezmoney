"use client";
import { cn } from "@/lib/utils";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export function SignInForm({
	className,
	...props
}: React.ComponentPropsWithoutRef<"div">) {
	return (
		<div className={cn("flex flex-col gap-6", className)} {...props}>
			<Card className="border-none">
				<CardHeader className="text-center">
					<CardTitle className="text-xl">Bem-vindo</CardTitle>
					<CardDescription>Faça login com sua conta Google</CardDescription>
				</CardHeader>

				<CardContent></CardContent>
			</Card>

			<div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary">
				Ao clicar em continuar, você concorda com nossos{" "}
				<a href="#">Termos de Serviço</a> e{" "}
				<a href="#">Política de Privacidade</a>.
			</div>
		</div>
	);
}
