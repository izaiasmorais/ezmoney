"use client";
import { ProfitBox } from "@/components/dashboard/profit";
import { Summary } from "@/components/dashboard/summary";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useChart } from "@/stores/chart";

export default function Dashboard() {
	return (
		<main>
			<Tabs defaultValue="this" className="w-full">
				<TabsList>
					<TabsTrigger value="this">This month</TabsTrigger>
					<TabsTrigger value="last">Last month</TabsTrigger>
				</TabsList>

				<TabsContent value="this" className="flex flex-col mt-6 gap-6">
					<Summary />
					<ProfitBox />
				</TabsContent>

				<TabsContent value="last" className="flex flex-col"></TabsContent>
			</Tabs>
		</main>
	);
}
