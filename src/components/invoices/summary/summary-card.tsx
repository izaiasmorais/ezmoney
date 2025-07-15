import { GeistMono } from "geist/font/mono";

export function InvoicesSummaryCard() {
	return (
		<div className="bg-dark-card border-dark-border w-full p-6 rounded-md border shadow-sm flex flex-col gap-6">
			<span className={`text-sm text-muted-foreground ${GeistMono.className}`}>
				Saldo Total
			</span>

			<div className="flex flex-col gap-2">
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
