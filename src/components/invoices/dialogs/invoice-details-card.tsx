import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Tag } from "@/components/ui/tag";
import { formatDate } from "@/utils/format-date";
import { formatToBRL } from "@/utils/format-to-brl";

interface InvoiceDetailsCardProps {
	name: string;
	dueDate: string;
	unitValue: number;
	installments: number;
}

export function InvoiceDetailsCard({
	name,
	dueDate,
	unitValue,
	installments,
}: InvoiceDetailsCardProps) {
	return (
		<div className="overflow-y-auto bg-background rounded-lg p-4 md:p-6">
			<div className="flex items-center justify-between mb-8">
				<h3 className="text-xl font-bold">{name}</h3>
			</div>

			<div className="mb-8">
				<Table className="w-full">
					<TableHeader>
						<TableRow className="border-none bg-sidebar [&>*]:px-6 [&>*]:h-12">
							<TableHead>Número da Parcela</TableHead>

							<TableHead>Valor Unitário</TableHead>

							<TableHead>Vencimento</TableHead>

							<TableHead>Status</TableHead>
						</TableRow>
					</TableHeader>

					<TableBody>
						{Array.from({ length: installments }).map((_, index) => {
							const installmentDueDate = new Date(dueDate || new Date());
							installmentDueDate.setMonth(
								installmentDueDate.getMonth() + index
							);

							return (
								<TableRow
									key={index}
									className="border-none [&>*]:px-6 [&>*]:h-12"
								>
									<TableCell>{index + 1}</TableCell>

									<TableCell>{formatToBRL(unitValue)}</TableCell>

									<TableCell>
										{formatDate(installmentDueDate.toISOString())}
									</TableCell>

									<TableCell>
										<Tag color="yellow">Pendente</Tag>
									</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</div>

			<div className="flex justify-end mb-8">
				<div className="text-right">
					<p className="text-sm mb-1">Total</p>

					<p className="text-2xl font-bold">
						{formatToBRL(unitValue * installments)}
					</p>
				</div>
			</div>
		</div>
	);
}
