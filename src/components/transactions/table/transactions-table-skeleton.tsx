import { Skeleton } from "@/components/ui/skeleton";
import { TableCell, TableRow } from "../../ui/table";

export function TransactionsTableItemSkeleton() {
	return (
		<TableRow className="border-none">
			<TableCell>
				<Skeleton className="h-4 w-[0px] bg-slate-100 rounded" />
			</TableCell>

			<TableCell>
				<Skeleton className="h-5 w-[118px] bg-slate-100 rounded" />
			</TableCell>

			<TableCell>
				<Skeleton className="h-5 w-[114px] bg-slate-100 rounded" />
			</TableCell>

			<TableCell>
				<Skeleton className="h-5 w-[110px] bg-slate-100 rounded" />
			</TableCell>

			<TableCell>
				<Skeleton className="h-5 w-[70px] bg-slate-100 rounded" />
			</TableCell>

			<TableCell>
				<Skeleton className="h-5 w-[20px] bg-slate-100 rounded" />
			</TableCell>

			<TableCell>
				<Skeleton className="h-6 w-[50px] bg-slate-100 rounded" />
			</TableCell>

			<TableCell>
				<Skeleton className="h-6 w-[50px] bg-slate-100 rounded" />
			</TableCell>

			<TableCell>
				<Skeleton className="h-6 w-[50px] bg-slate-100 rounded" />
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
