"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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

const profileSchema = z.object({
	avatarUrl: z.string().url({ message: "URL inválida" }),
	name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
	email: z.string().email({ message: "Email inválido" }),
});

export function ProfileForm() {
	const profileForm = useForm<z.infer<typeof profileSchema>>({
		resolver: zodResolver(profileSchema),
		defaultValues: {
			name: "",
			email: "",
			avatarUrl: "",
		},
	});

	const handleSubmit = (data: z.infer<typeof profileSchema>) => {
		console.log("Profile data:", data);
	};

	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
			<div className="col-span-1">
				<strong className="text-lg font-semibold">Perfil</strong>
				<p className="text-sm text-muted-foreground mt-1">
					Atualize a imagem do seu perfil, nome e email.
				</p>
			</div>

			<div className="col-span-1 md:col-span-2">
				<Card className="border-muted rounded-lg overflow-auto shadow-none p-0">
					<CardContent className="space-y-6 mt-6">
						<Form {...profileForm}>
							<form
								onSubmit={profileForm.handleSubmit(handleSubmit)}
								className="space-y-6"
							>
								<FormField
									control={profileForm.control}
									name="avatarUrl"
									render={() => (
										<FormItem>
											<FormLabel>Foto</FormLabel>
											<FormControl>
												<Avatar className="h-20 w-20">
													<AvatarImage src="https://github.com/izaiasmorais.png" />
													<AvatarFallback>IZ</AvatarFallback>
												</Avatar>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={profileForm.control}
									name="name"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Name</FormLabel>
											<FormControl>
												<Input
													type="text"
													placeholder="Digite seu nome"
													{...field}
													disabled
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={profileForm.control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Email</FormLabel>
											<FormControl>
												<Input
													type="email"
													placeholder="Digite seu email"
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
						<Button onClick={profileForm.handleSubmit(handleSubmit)}>
							Salvar
						</Button>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
}
