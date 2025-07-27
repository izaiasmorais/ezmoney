import { Skeleton } from "@/components/ui/skeleton";

interface CreditCardSkeletonProps {
	count?: number;
}

export function CreditCardSkeleton({ count = 3 }: CreditCardSkeletonProps) {
	const skeletons = Array.from({ length: count }, (_, i) => ({
		id: `credit-card-skeleton-${i}-${Date.now()}`,
	}));

	return (
		<div className="flex flex-col gap-4">
			<div>
				<h1 className="text-lg">Cartões de Crédito</h1>
			</div>

			<div className="gap-4 grid grid-cols-3">
				{skeletons.map((skeleton) => (
					<div
						key={skeleton.id}
						className="dark:bg-card p-6 border border-border rounded-lg space-y-4"
					>
						<div className="flex items-start justify-between">
							<div className="flex items-center gap-4">
								<Skeleton className="w-12 h-12 rounded-full" />
								<Skeleton className="h-6 w-32" />
							</div>

							<Skeleton className="w-8 h-8 rounded" />
						</div>

						<div className="flex items-center gap-2 text-sm h-[44px]">
							<Skeleton className="h-4 w-8" />
							<Skeleton className="h-4 w-8" />
							<Skeleton className="h-4 w-8" />
							<Skeleton className="h-6 w-12" />

							<div className="flex flex-col ml-auto gap-1">
								<Skeleton className="h-3 w-12" />
								<Skeleton className="h-4 w-20" />
							</div>
						</div>

						<div className="w-full h-2 rounded-full">
							<Skeleton className="h-2 w-full" />
						</div>

						<div className="flex items-center justify-between">
							<div className="flex flex-col gap-2">
								<Skeleton className="h-4 w-16" />
								<Skeleton className="h-8 w-32" />
							</div>

							<div className="flex flex-col gap-2">
								<Skeleton className="h-4 w-12" />
								<Skeleton className="h-8 w-44" />
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
