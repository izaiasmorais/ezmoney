import { BankingSummary } from "../../../components/banking/banking-summary";

export default function Banking() {
	return (
		<main className="flex flex-col gap-4 md:gap-6">
			<div className="flex flex-wrap gap-2 justify-between items-center">
				<h1 className="text-2xl font-medium flex items-center gap-2">
					Banking
				</h1>

				<div></div>
			</div>

			<BankingSummary />

			<section className="grid gap-4 md:gap-6 xl:grid-cols-3"></section>
		</main>
	);
}
