import { GeistMono } from "geist/font/mono";
import { Ellipsis, Landmark } from "lucide-react";
import type { BankAccount } from "@/hooks/bank-accounts/use-get-bank-accounts";
import { formatCurrency } from "@/utils/format-currency";
import { Button } from "../../ui/button";
import { CreateBankAccountForm } from "../create-bank-account-sheet";

interface BankAccountsProps {
	bankAccounts: BankAccount[];
}

export function BankAccounts({ bankAccounts }: BankAccountsProps) {
	return (
		<div className="flex flex-col gap-4">
			<div className="flex justify-between items-center">
				<h1 className="text-lg">Contas Bancárias</h1>

				<CreateBankAccountForm />
			</div>

			<div className="gap-4 grid grid-cols-3">
				{bankAccounts.map((bankAccount) => (
					<div
						key={bankAccount.id}
						className="bg-card p-6 border border-border rounded-lg space-y-4"
					>
						<div className="flex items-start justify-between">
							<div className="flex items-center gap-4">
								<div
									className="w-12 h-12 rounded-full bg-background flex items-center
						justify-center"
								>
									<Landmark size={24} style={{ color: bankAccount.color }} />
								</div>

								<h1 className="text-lg">{bankAccount.name}</h1>
							</div>

							<Button variant="ghost" size="icon">
								<Ellipsis />
							</Button>
						</div>

						<div className="flex flex-col gap-2">
							<span className="text-muted-foreground text-sm">
								Saldo Disponível
							</span>

							<span
								className={`text-2xl font-semibold ${GeistMono.className}`}
							>
								{formatCurrency(bankAccount.balance)}
							</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
