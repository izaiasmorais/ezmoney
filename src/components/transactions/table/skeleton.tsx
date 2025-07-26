import { Skeleton } from "@/components/ui/skeleton";
import { TableCell, TableRow } from "@/components/ui/table";

export function TransactionTableSkeleton() {
	const rowKeys = Array.from({ length: 10 }, () => crypto.randomUUID());
	const cellKeys = Array.from({ length: 7 }, () => crypto.randomUUID());

	return (
		<>
			{rowKeys.map((rowKey) => (
				<TableRow key={rowKey} className="border-none">
					{cellKeys.map((cellKey) => (
						<TableCell key={cellKey} className="h-14">
							<Skeleton className="h-5 w-full" />
						</TableCell>
					))}
				</TableRow>
			))}
		</>
	);
}
