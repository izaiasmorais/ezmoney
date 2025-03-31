import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface InvoicesSummarySkeletonProps {
	className?: string;
}

export function InvoicesSummaryItemSkeleton({
	className,
}: {
	className?: string;
}) {
	return (
		<div className={cn("p-4 border rounded-md", className)}>
			<div className="flex items-center gap-3">
				<Skeleton className="h-9 w-9 rounded-full bg-slate-100" />
				<Skeleton className="h-5 w-3/4 bg-slate-100" />
			</div>

			<div className="mt-3">
				<Skeleton className="h-3 w-24 mt-1 bg-slate-100" />
				<Skeleton className="h-8 w-50 mt-1 bg-slate-100" />
			</div>
		</div>
	);
}

export function InvoicesSummarySkeleton({
	className,
}: InvoicesSummarySkeletonProps) {
	return (
		<div
			className={cn(
				"w-full shadow-none rounded-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4",
				className
			)}
		>
			<InvoicesSummaryItemSkeleton />
			<InvoicesSummaryItemSkeleton />
			<InvoicesSummaryItemSkeleton />
			<InvoicesSummaryItemSkeleton />
			<InvoicesSummaryItemSkeleton />
		</div>
	);
}
