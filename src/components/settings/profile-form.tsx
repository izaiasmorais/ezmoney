"use client";
import React from "react";
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
import { useQuery } from "@tanstack/react-query";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { getSession } from "@/api/session/get-session";
import { useEditProfile } from "@/hooks/auth/use-update-profile";
import { Skeleton } from "../ui/skeleton";
import Image from "next/image";

export function ProfileForm() {
	const { form } = useEditProfile();
	const { data, isLoading: isLoadingGetSession } = useQuery({
		queryKey: ["get-session"],
		queryFn: getSession,
		staleTime: 1000 * 60 * 5, // 5 minutes
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
	});

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
						<Form {...form}>
							<form onSubmit={form.handleSubmitForm} className="space-y-6">
								<FormField
									control={form.control}
									name="avatarUrl"
									render={() => (
										<FormItem>
											<FormLabel>Foto</FormLabel>

											<FormControl>
												<div>
													{isLoadingGetSession && (
														<div className="w-20 h-20 rounded-full bg-muted" />
													)}

													{!isLoadingGetSession && data && (
														<Avatar className="h-20 w-20">
															<Image
																src={data.user.image}
																alt="User profile picture"
																className="rounded-full"
																width={80}
																height={80}
																quality={100}
																priority
															/>

															<AvatarFallback>
																{data.user.name
																	.split(" ")
																	.map((n) => n[0])
																	.join("")}
															</AvatarFallback>
														</Avatar>
													)}
												</div>
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="name"
									render={() => (
										<FormItem>
											<FormLabel>Name</FormLabel>
											<FormControl>
												<div>
													{isLoadingGetSession && (
														<Skeleton className="w-full h-9 rounded-sm bg-sidebar" />
													)}

													{!isLoadingGetSession && data && (
														<Input
															type="text"
															placeholder="Digite seu nome"
															defaultValue={data.user.name}
															disabled
														/>
													)}
												</div>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="email"
									render={() => (
										<FormItem>
											<FormLabel>Email</FormLabel>

											<FormControl>
												<div>
													{isLoadingGetSession && (
														<Skeleton className="w-full h-9 rounded-sm bg-sidebar" />
													)}

													{!isLoadingGetSession && data && (
														<Input
															type="email"
															placeholder="Digite seu email"
															defaultValue={data.user.email}
															disabled
														/>
													)}
												</div>
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>
							</form>
						</Form>
					</CardContent>

					<CardFooter className="bg-sidebar flex justify-end p-3">
						<Button onClick={form.handleSubmitForm}>Salvar</Button>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
}
