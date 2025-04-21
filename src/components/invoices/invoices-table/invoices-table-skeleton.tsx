import { Skeleton } from "@/components/ui/skeleton";
import { TableCell, TableRow } from "../../ui/table";

export function InvoicesTableItemSkeleton() {
	return (
		<TableRow className="border-none">
			<TableCell className="h-12">
				<Skeleton className="h-5 w-[118px] bg-gray-50 rounded" />
			</TableCell>

			<TableCell>
				<Skeleton className="h-5 w-[100px] bg-gray-50 rounded" />
			</TableCell>

			<TableCell>
				<Skeleton className="h-5 w-[100px] bg-gray-50 rounded" />
			</TableCell>

			<TableCell>
				<Skeleton className="h-5 w-[100px] bg-gray-50 rounded" />
			</TableCell>

			<TableCell>
				<Skeleton className="h-5 w-[20px] bg-gray-50 rounded" />
			</TableCell>

			<TableCell>
				<Skeleton className="h-6 w-[100px] bg-gray-50 rounded" />
			</TableCell>

			<TableCell>
				<Skeleton className="h-6 w-[100px] bg-gray-50 rounded" />
			</TableCell>

			<TableCell>
				<Skeleton className="h-6 w-[100px] bg-gray-50 rounded" />
			</TableCell>

			<TableCell>
				<Skeleton className="h-6 w-[32px] bg-gray-50 rounded" />
			</TableCell>
		</TableRow>
	);
}

export function InvoicesTableSkeleton() {
	return (
		<>
			{Array.from({ length: 10 }).map((_, index) => (
				<InvoicesTableItemSkeleton key={index} />
			))}
		</>
	);
}
