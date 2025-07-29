import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Plus } from "lucide-react";

interface BankAccountSkeletonProps {
	count?: number;
}

export function BankAccountSkeleton({ count = 3 }: BankAccountSkeletonProps) {
	const skeletons = Array.from({ length: count }, (_, i) => ({
		id: `skeleton-${i}-${Date.now()}`,
	}));

	return (
		<div className="flex flex-col gap-4">
			<div className="flex items-center justify-between">
				<h1 className="text-lg">Contas Bancárias</h1>

				<Button variant="outline" disabled>
					<Plus size={16} />
					Adicionar Conta Bancária
				</Button>
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
								<Skeleton className="h-7 w-32" />
							</div>

							<Skeleton className="w-9 h-9 rounded-md" />
						</div>

						<div className="flex flex-col gap-2">
							<Skeleton className="h-5 w-24" />
							<Skeleton className="h-8 w-32" />
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
