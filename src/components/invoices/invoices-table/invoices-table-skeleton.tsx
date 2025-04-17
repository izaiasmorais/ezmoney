import { Skeleton } from "@/components/ui/skeleton";
import { TableCell, TableRow } from "../../ui/table";

export function InvoicesTableItemSkeleton() {
	return (
		<TableRow className="border-none">
			<TableCell>
				<Skeleton className="h-4 w-[0px] bg-gray-50 rounded" />
			</TableCell>

			<TableCell>
				<Skeleton className="h-5 w-[118px] bg-gray-50 rounded" />
			</TableCell>

			<TableCell>
				<Skeleton className="h-5 w-[114px] bg-gray-50 rounded" />
			</TableCell>

			<TableCell>
				<Skeleton className="h-5 w-[110px] bg-gray-50 rounded" />
			</TableCell>

			<TableCell>
				<Skeleton className="h-5 w-[70px] bg-gray-50 rounded" />
			</TableCell>

			<TableCell>
				<Skeleton className="h-5 w-[20px] bg-gray-50 rounded" />
			</TableCell>

			<TableCell>
				<Skeleton className="h-6 w-[50px] bg-gray-50 rounded" />
			</TableCell>

			<TableCell>
				<Skeleton className="h-6 w-[50px] bg-gray-50 rounded" />
			</TableCell>

			<TableCell>
				<Skeleton className="h-6 w-[50px] bg-gray-50 rounded" />
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
