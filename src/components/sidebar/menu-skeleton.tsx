import { Skeleton } from "../ui/skeleton";

export function MenuSkeleton() {
	return (
		<div
			className="flex items-center gap-2 w-full p-2 cursor-pointer hover:bg-card
				rounded-md transition-colors"
		>
			<Skeleton className="w-8 h-8" />

			<div className="flex flex-col gap-1 text-xs max-w-[150px]">
				<Skeleton className="w-20 h-4" />

				<Skeleton className="w-32 h-4" />
			</div>
		</div>
	);
}
