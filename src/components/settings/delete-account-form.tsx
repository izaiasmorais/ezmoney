"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function DeleteAccountForm() {
	const handleDeleteAccount = () => {
		console.log("Account deletion requested");
	};

	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
			<div className="col-span-1">
				<strong className="text-lg font-semibold">Excluir Conta</strong>
				<p className="text-sm text-muted-foreground mt-1">
					Excluir sua conta é permanente e não pode ser desfeito. Você perderá
					todos os dados associados à sua conta.
				</p>
			</div>

			<div className="col-span-1 md:col-span-2">
				<Card className="border-muted rounded-lg p-0 shadow-none">
					<CardContent className="p-6">
						<p className="mb-4 text-sm">
							Depois que sua conta for excluída, todos os seus recursos e dados
							serão excluídos permanentemente. Antes de excluir sua conta, baixe
							quaisquer dados ou informações que você deseja reter.
						</p>

						<Button
							variant="destructive"
							onClick={handleDeleteAccount}
							className="bg-red-600 hover:bg-red-700"
							disabled
						>
							DELETAR CONTA
						</Button>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
