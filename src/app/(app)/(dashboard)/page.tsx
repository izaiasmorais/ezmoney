"use client";
import { Summary } from "@/components/dashboard/summary";
import { Card } from "@/components/ui/card";

export default function Dashboard() {
	return (
		<main className="flex flex-col gap-4 md:gap-6 h-full">
			<Summary />

			<section
				id="charts"
				className="grid flex-1 gap-4 md:gap-6 xl:grid-cols-3"
			>
				<Card className="p-4 md:p-6 space-y-4 md:space-y-6 xl:col-span-2">
					<div className="flex justify-start w-full">
						<strong className="text-xl font-medium">Lucro</strong>
					</div>
				</Card>

				<Card className="p-4 md:p-6 space-y-4 md:space-y-6">
					<div className="flex justify-start w-full">
						<strong className="text-xl font-medium">Gastos</strong>
					</div>
				</Card>
			</section>
		</main>
	);
}
