import { Skeleton } from "@/components/ui/skeleton";
import { TableCell, TableRow } from "../../ui/table";

export function TransactionsTableItemSkeleton() {
	return (
		<TableRow className="border-none">
			<TableCell>
				<Skeleton className="h-4 w-[0px] rounded" />
			</TableCell>

			<TableCell>
				<Skeleton className="h-5 w-[118px] rounded" />
			</TableCell>

			<TableCell>
				<Skeleton className="h-5 w-[114px] rounded" />
			</TableCell>

			<TableCell>
				<Skeleton className="h-5 w-[110px] rounded" />
			</TableCell>

			<TableCell>
				<Skeleton className="h-5 w-[70px] rounded" />
			</TableCell>

			<TableCell>
				<Skeleton className="h-5 w-[20px] rounded" />
			</TableCell>

			<TableCell>
				<Skeleton className="h-6 w-[50px] rounded" />
			</TableCell>

			<TableCell>
				<Skeleton className="h-6 w-[50px] rounded" />
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
