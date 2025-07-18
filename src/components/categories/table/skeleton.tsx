import { Skeleton } from "@/components/ui/skeleton";
import { TableCell, TableRow } from "@/components/ui/table";

export function CategoriesTableSkeleton() {
	const rows = Array.from({ length: 10 }, () => crypto.randomUUID());
	const columns = Array.from({ length:4 }, () => crypto.randomUUID());

	return (
		<>
			{rows.map((row) => (
				<TableRow key={row} className="border-none">
					{columns.map((column) => (
						<TableCell key={column} className="h-14">
							<Skeleton className="h-5 w-full" />
						</TableCell>
					))}
				</TableRow>
			))}
		</>
	);
}
