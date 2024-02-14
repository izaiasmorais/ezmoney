import { SummaryCard } from "./summary-card";
import { ArrowDownCircle, ArrowUpCircle, Wallet2 } from "lucide-react";

export function Summary() {
	return (
		<section id="summary" className="grid gap-6 md:grid-cols-3">
			<SummaryCard
				title="Entradas"
				icon={<ArrowDownCircle size={20} />}
				value={3234.78}
				description={
					<p>
						<span className="text-emerald-500 dark:text-emerald-400">
							+2.1%
						</span>{" "}
						a mais que o mês passado
					</p>
				}
			/>

			<SummaryCard
				title="Saídas"
				icon={<ArrowUpCircle size={20} />}
				value={2315.78}
				description={
					<p>
						<span className="text-red-500 dark:text-red-400">-6.34%</span> a
						menos que o mês passado
					</p>
				}
			/>

			<SummaryCard
				title="Saldo Total"
				icon={<Wallet2 size={20} />}
				value={1115.6}
				description={
					<p>
						<span className="text-emerald-500 dark:text-emerald-400">
							+20.14%
						</span>{" "}
						a mais que o mês passado
					</p>
				}
			/>
		</section>
	);
}
