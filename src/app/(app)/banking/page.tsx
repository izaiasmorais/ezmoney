import { BankingSummary } from "../../../components/banking/banking-summary";
import { EarnBox } from "../../../components/banking/earn-box";
import { EarnChart } from "../../../components/banking/earn-chart";

export default function Banking() {
	return (
		<main className="flex flex-col gap-3">
			<div className="flex flex-wrap gap-2 justify-between items-center">
				<h1 className="text-2xl font-medium flex items-center gap-2">
					Banking
				</h1>

				<div></div>
			</div>

			<div className="flex flex-col gap-6">
				<BankingSummary />

				<div className="grid grid-cols-[3fr_1fr] gap-6">
					<EarnChart />

					<EarnBox />
				</div>
			</div>
		</main>
	);
}
