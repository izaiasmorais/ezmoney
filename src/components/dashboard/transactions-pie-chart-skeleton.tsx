import * as React from "react";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function TransactionsChartSkeleton() {
	return (
		<Card className="flex flex-col lg:col-span-1 shadow-none border-muted pb-0 h-full">
			<CardHeader className="pb-0">
				<div className="flex flex-col gap-1">
					<Skeleton className="h-6 w-24" />
					<Skeleton className="h-4 w-32" />
				</div>
			</CardHeader>

			<CardContent className="flex-1 p-0">
				<div className="mx-auto aspect-square max-h-90 flex items-center justify-center">
					<div className="relative w-full h-full">
						{/* Circular skeleton for the donut chart */}
						<Skeleton className="absolute w-full h-full rounded-full" />
						{/* Inner circle to create donut effect */}
						<div className="absolute inset-0 flex items-center justify-center">
							<div className="bg-card w-3/5 h-3/5 rounded-full flex flex-col items-center justify-center">
								<Skeleton className="h-8 w-24 mb-2" />
								<Skeleton className="h-4 w-20" />
							</div>
						</div>
					</div>
				</div>
			</CardContent>

			<CardFooter className="flex-col gap-2 text-sm p-4 border-t border-dashed">
				<div className="grid grid-cols-2 2xl:grid-cols-4 gap-4 p-4">
					{/* Generate skeleton items for the legend */}
					{Array(8)
						.fill(0)
						.map((_, index) => (
							<div key={index} className="flex items-center gap-2">
								<Skeleton className="w-4 h-4 rounded-full" />
								<Skeleton className="h-4 w-16" />
							</div>
						))}
				</div>
			</CardFooter>
		</Card>
	);
}
