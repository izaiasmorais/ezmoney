import { Skeleton } from "@/components/ui/skeleton";
import { TableCell, TableRow } from "@/components/ui/table";

export function InvoiceInstallmentsTableSkeleton() {
	const rowKeys = Array.from({ length: 10 }, () => crypto.randomUUID());
	const cellKeys = Array.from({ length: 5 }, () => crypto.randomUUID());

	return (
		<>
			{rowKeys.map((rowKey) => (
				<TableRow key={rowKey} className="!h-12">
					{cellKeys.map((cellKey) => (
						<TableCell key={cellKey}>
							<Skeleton className="h-5 w-full" />
						</TableCell>
					))}
				</TableRow>
			))}
		</>
	);
}
