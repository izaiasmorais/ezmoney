import { Skeleton } from "@/components/ui/skeleton";
import { TableCell, TableRow } from "../../ui/table";

export function TransactionsTableItemSkeleton() {
	return (
		<TableRow className="border-none">
			<TableCell className="h-12">
				<Skeleton className="h-5 w-[121px] rounded" />
			</TableCell>

			<TableCell>
				<Skeleton className="h-5 w-[100px] rounded" />
			</TableCell>

			<TableCell>
				<Skeleton className="h-5 w-[80px] rounded" />
			</TableCell>

			<TableCell>
				<Skeleton className="h-5 w-[100px] rounded" />
			</TableCell>

			<TableCell>
				<Skeleton className="h-5 w-[100px] rounded" />
			</TableCell>

			<TableCell>
				<Skeleton className="h-6 w-[20px] rounded" />
			</TableCell>

			<TableCell>
				<Skeleton className="h-6 w-[32px] rounded" />
			</TableCell>
		</TableRow>
	);
}

export function TransactionsTableSkeleton() {
	return (
		<>
			{Array.from({ length: 10 }).map((_, index) => (
				<TransactionsTableItemSkeleton key={index} />
			))}
		</>
	);
}
