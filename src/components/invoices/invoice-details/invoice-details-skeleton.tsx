import {
	Table,
	TableHeader,
	TableBody,
	TableHead,
	TableRow,
	TableCell,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

export function InvoiceDetailsSkeleton() {
	return (
		<div className="w-full flex flex-col p-6 space-y-6">
			<h2 className="text-xl font-bold">
				<Skeleton className="h-8 w-32" />
			</h2>

			<div className="flex justify-between items-center">
				<div className="flex items-center space-x-2">
					<Skeleton className="h-9 w-9" />
					<Skeleton className="h-9 w-9" />
					<Skeleton className="h-9 w-9" />
					<Skeleton className="h-9 w-9" />
				</div>

				<Skeleton className="h-9 w-32" />
			</div>

			<div className="flex justify-between">
				<div>
					<strong className="text-sm text-muted-foreground">
						Data de Criação
					</strong>

					<Skeleton className="h-6 w-24 mt-1" />
				</div>

				<div className="flex flex-col items-start">
					<strong className="text-sm text-muted-foreground">
						Data de Vencimento
					</strong>

					<Skeleton className="h-6 w-24 mt-1 ml-auto" />
				</div>
			</div>

			<Table>
				<TableHeader className="bg-sidebar rounded-t-lg overflow-hidden">
					<TableRow className="border-none">
						<TableHead className="first:rounded-tl-lg p-4">Parcela</TableHead>
						<TableHead>Valor</TableHead>
						<TableHead className="last:rounded-tr-lg">
							Data de Vencimento
						</TableHead>
					</TableRow>
				</TableHeader>

				<TableBody>
					{Array.from({ length: 5 }).map((_, index) => (
						<TableRow key={index} className="border-muted">
							<TableCell className="p-4">
								<Skeleton className="h-5 w-6" />
							</TableCell>

							<TableCell>
								<Skeleton className="h-5 w-20" />
							</TableCell>

							<TableCell>
								<Skeleton className="h-5 w-24" />
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>

			<div className="flex justify-end">
				<div className="flex items-center gap-2">
					<span className="font-medium">Total:</span>
					<Skeleton className="h-6 w-28" />
				</div>
			</div>
		</div>
	);
}
