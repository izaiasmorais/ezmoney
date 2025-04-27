import * as React from "react";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function TransactionsBarChartSkeleton() {
	const currentDate = new Date();
	const currentMonth = currentDate.getMonth() + 1;

	return (
		<Card className="flex-1 h-full flex flex-col shadow-none bg-transparent">
			<CardHeader>
				<div className="flex justify-between items-center">
					<div>
						<Skeleton className="h-6 w-44" />
						<Skeleton className="h-4 w-full min-w-16 max-w-16 mt-1" />
					</div>
					<Skeleton className="h-9 w-45" />
				</div>
			</CardHeader>

			<CardContent className="flex-1 flex gap-6 min-h-[211px]">
				<div className="w-[70px] h-full flex flex-col justify-between">
					{Array.from({ length: currentMonth + 1 }).map((_, index) => (
						<Skeleton key={index} className="h-5 w-full rounded-sm" />
					))}
				</div>

				<div className={`flex-1 flex gap-6 px-6`}>
					{Array.from({ length: currentMonth }).map((_, index) => (
						<Skeleton key={index} className="flex-1 rounded-sm" />
					))}
				</div>
			</CardContent>

			<CardFooter className="flex items-center justify-center gap-6 text-sm pt-4 border-t border-dashed">
				{Array(3)
					.fill(0)
					.map((_, index) => (
						<div key={index} className="flex items-center gap-2">
							<Skeleton className="w-4 h-4 rounded-full" />
							<Skeleton className="h-4 w-16" />
						</div>
					))}
			</CardFooter>
		</Card>
	);
}
