import { BankAccount } from "@/hooks/bank-accounts/use-get-bank-accounts";
import { formatCurrency } from "@/utils/format-currency";
import { Ellipsis, Landmark } from "lucide-react";
import { Button } from "../ui/button";

interface BankAccountsProps {
	bankAccounts: BankAccount[];
}

export function BankAccounts({ bankAccounts }: BankAccountsProps) {
	return (
		<div className="flex flex-col gap-4">
			<div>
				<h1 className="text-lg">Contas Bancárias</h1>
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
									className="w-14 h-14 rounded-full bg-background flex items-center
						justify-center"
								>
									<Landmark size={24} style={{ color: bankAccount.color }} />
								</div>

								<h1 className="text-lg font-medium">{bankAccount.name}</h1>
							</div>

							<Button variant="ghost" size="icon">
								<Ellipsis />
							</Button>
						</div>

						<div className="flex flex-col gap-2">
							<span className="text-muted-foreground text-sm">
								Saldo Disponível
							</span>

							<strong className="text-2xl font-bold">
								{formatCurrency(bankAccount.balance)}
							</strong>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
