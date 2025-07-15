import { GeistMono } from "geist/font/mono";
import { Wallet } from "lucide-react";

export function TransactionsSummaryCard() {
	return (
		<div className="p-6 rounded-md border shadow-sm flex flex-col gap-6">
			<div className="bg-[#121212] rounded-md flex items-center justify-center p-2">
				<Wallet />
			</div>

			<div className="flex flex-col gap-2">
				<span
					className={`text-sm text-muted-foreground ${GeistMono.className}`}
				>
					Saldo Total
				</span>
				<span className={`text-2xl font-medium ${GeistMono.className}`}>
					R$ 23.432,00
				</span>
				<span className={`text-sm text-zinc-500 ${GeistMono.className}`}>
					Em 5 contas
				</span>
			</div>
		</div>
	);
}
