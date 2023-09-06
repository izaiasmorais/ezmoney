import { ProfitBox } from "@/components/dashboard/profit";
import { Summary } from "@/components/dashboard/summary";

export default function Dashboard() {
	return (
		<main className="flex flex-col mt-6 gap-6">
			<Summary />
			<ProfitBox />
		</main>
	);
}
