"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";

const passwordSchema = z
	.object({
		currentPassword: z
			.string()
			.min(6, { message: "Senha deve ter pelo menos 6 caracteres" }),
		newPassword: z
			.string()
			.min(6, { message: "Senha deve ter pelo menos 6 caracteres" }),
		confirmPassword: z
			.string()
			.min(6, { message: "Senha deve ter pelo menos 6 caracteres" }),
	})
	.refine((data) => data.newPassword === data.confirmPassword, {
		message: "As senhas não conferem",
		path: ["confirmPassword"],
	});

export function PasswordForm() {
	const passwordForm = useForm<z.infer<typeof passwordSchema>>({
		resolver: zodResolver(passwordSchema),
		defaultValues: {
			currentPassword: "",
			newPassword: "",
			confirmPassword: "",
		},
	});

	const handleSubmit = (data: z.infer<typeof passwordSchema>) => {
		console.log("Password data:", data);
	};

	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
			<div className="col-span-1">
				<strong className="text-lg font-semibold">Atualizar Senha</strong>
				<p className="text-sm text-muted-foreground mt-1">
					Tenha certeza de que sua conta está usando uma senha longa e aleatória
					para permanecer segura.
				</p>
			</div>

			<div className="col-span-1 md:col-span-2">
				<Card className="border-muted rounded-lg overflow-auto shadow-none p-0">
					<CardContent className="space-y-6 mt-6">
						<Form {...passwordForm}>
							<form
								onSubmit={passwordForm.handleSubmit(handleSubmit)}
								className="space-y-6"
							>
								<FormField
									control={passwordForm.control}
									name="currentPassword"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Senha Atual</FormLabel>
											<FormControl>
												<Input
													type="password"
													placeholder="••••••••"
													{...field}
													disabled
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={passwordForm.control}
									name="newPassword"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Nova Senha</FormLabel>
											<FormControl>
												<Input
													type="password"
													placeholder="••••••••"
													{...field}
													disabled
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={passwordForm.control}
									name="confirmPassword"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Confirmar Senha</FormLabel>
											<FormControl>
												<Input
													type="password"
													placeholder="••••••••"
													{...field}
													disabled
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</form>
						</Form>
					</CardContent>

					<CardFooter className="bg-sidebar flex justify-end p-3">
						<Button
							type="submit"
							onClick={passwordForm.handleSubmit(handleSubmit)}
						>
							Salvar
						</Button>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
}
