import { Skeleton } from "@/components/ui/skeleton";

export function InvoicesSummaryCardSkeleton() {
	return (
		<div className="dark:bg-card border-border w-full p-6 rounded-md border flex flex-col gap-6 animate-pulse">
			<Skeleton className="h-5 w-24 dark:bg-zinc-800 " />

			<div className="flex flex-col gap-2">
				<Skeleton className="h-8 w-32 dark:bg-zinc-800" />

				<Skeleton className="h-5 w-20 dark:bg-zinc-800" />
			</div>
		</div>
	);
}
