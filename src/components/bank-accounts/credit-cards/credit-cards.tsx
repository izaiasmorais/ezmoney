import { GeistMono } from "geist/font/mono";
import { CreditCard, Ellipsis } from "lucide-react";
import type { BankAccount } from "@/hooks/bank-accounts/use-get-bank-accounts";
import { formatCurrency } from "@/utils/format-currency";
import { Button } from "../../ui/button";
import { Progress } from "../../ui/progress";

interface CreditCardsProps {
	creditCards: BankAccount[];
}

export function CreditCards({ creditCards }: CreditCardsProps) {
	return (
		<div className="flex flex-col gap-4">
			<div className="flex justify-between items-center">
				<h1 className="text-lg">Cartões de Crédito</h1>


			</div>

			<div className="gap-4 grid grid-cols-3">
				{creditCards.map((creditCard) => (
					<div
						key={creditCard.id}
						className="bg-card p-6 border border-border rounded-lg space-y-4"
					>
						<div className="flex items-start justify-between">
							<div className="flex items-center gap-4">
								<div
									className="w-12 h-12 rounded-full bg-background flex items-center
						justify-center"
								>
									<CreditCard size={24} style={{ color: creditCard.color }} />
								</div>

								<h1 className="text-lg">{creditCard.name}</h1>
							</div>

							<Button variant="ghost" size="icon">
								<Ellipsis />
							</Button>
						</div>

						<div className="flex items-center justify-between">
							<div className="space-x-2 text-xs">
								<span>✱✱✱✱</span>
								<span>✱✱✱✱</span>
								<span>✱✱✱✱</span>
								<span className="text-xl">4567</span>
							</div>

							<div className="flex flex-col gap-2 text-sm ml-auto">
								<span className="text-muted-foreground text-xs">
									Data de Fechamento
								</span>

								<strong>
									{creditCard.closingDay}/{new Date().getMonth() + 1}
								</strong>
							</div>
						</div>

						<div className="w-full h-2 rounded-full ">
							<Progress
								value={(1000 / (creditCard.creditLimit ?? 0)) * 100}
								className="h-2"
							/>
						</div>

						<div className="flex items-center justify-between">
							<div className="flex flex-col gap-2">
								<span className="text-muted-foreground text-sm">Utilizado</span>

								<span
									className={`text-2xl font-semibold ${GeistMono.className}`}
								>
									{formatCurrency(creditCard.spentLimit ?? 0)}
								</span>
							</div>

							<div className="flex flex-col gap-2">
								<span className="text-xs text-muted-foreground">Limite</span>

								<span
									className={`text-2xl font-semibold ${GeistMono.className}`}
								>
									{formatCurrency(creditCard.creditLimit ?? 0)}
								</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
