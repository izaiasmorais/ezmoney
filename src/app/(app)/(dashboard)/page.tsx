import { ProfitBox } from "@/components/dashboard/profit";
import { RecentSales } from "@/components/dashboard/recent-sales";
import { Summary } from "@/components/dashboard/summary";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
					<div className="flex flex-wrap gap-6">
						<ProfitBox />
						<RecentSales />
					</div>
				</TabsContent>

				<TabsContent value="last" className="flex flex-col"></TabsContent>
			</Tabs>
		</main>
	);
}
