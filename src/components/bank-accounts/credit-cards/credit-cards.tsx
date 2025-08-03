import { GeistMono } from "geist/font/mono";
import { CreditCard } from "lucide-react";
import { TableEmpty } from "@/components/table/table-empty";
import type { BankAccount } from "@/hooks/bank-accounts/use-get-bank-accounts";
import { formatCurrency } from "@/utils/format-currency";
import { Progress } from "../../ui/progress";
import { CreditCardMenu } from "./menu";

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
						className="dark:bg-card p-6 border border-border rounded-lg space-y-4"
					>
						<div className="flex items-start justify-between">
							<div className="flex items-center gap-4">
								<div
									className="w-12 h-12 rounded-full bg-card dark:bg-background flex items-center
						justify-center"
								>
									<CreditCard size={24} style={{ color: creditCard.color }} />
								</div>

								<h1 className="text-lg">{creditCard.name}</h1>
							</div>

							<CreditCardMenu creditCard={creditCard} />
						</div>

						<div className="flex items-center justify-between">
							<div className="space-x-2">
								<span className="text-[10px]">✱✱✱✱</span>
								<span className="text-[10px]">✱✱✱✱</span>
								<span className="text-[10px]">✱✱✱✱</span>
								<span className="text-sm">4567</span>
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
								value={
									((creditCard.spentLimit ?? 0) /
										(creditCard.creditLimit ?? 0)) *
									100
								}
								className="h-1"
								color={creditCard.color}
							/>
						</div>

						<div className="flex items-center justify-between">
							<div className="flex flex-col gap-2">
								<span className={`text-muted-foreground text-sm ${GeistMono.className}`}>
									Utilizado
								</span>

								<span
									className={`text-xl font-semibold ${GeistMono.className}`}
								>
									{formatCurrency(creditCard.spentLimit ?? 0)}
								</span>
							</div>

							<div className="flex flex-col gap-2">
								<span className={`text-xs text-muted-foreground ${GeistMono.className}`}>
									Disponível
								</span>

								<span
									className={`text-xl font-semibold ${GeistMono.className}`}
								>
									{formatCurrency(creditCard.availableLimit ?? 0)}
								</span>
							</div>
						</div>
					</div>
				))}
			</div>

			{creditCards.length === 0 && (
				<div className="flex flex-col gap-4">
					<TableEmpty
						message="Você não possui cartões de crédito"
						description="Adicione um cartão de crédito para começar."
					/>
				</div>
			)}
		</div>
	);
}
