import { Button } from "@/components/ui/button";
import { FileDown, Mail } from "lucide-react";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

export function InvoicePreview() {
	return (
		<div className="w-full lg:w-1/2 bg-slate-50 rounded-lg p-6">
			<div className="flex justify-between items-center mb-6">
				<h2 className="text-sm font-semibold text-gray-500">PREVIEW</h2>
				<div className="flex gap-2">
					<Button variant="ghost" size="icon" className="text-gray-600">
						<FileDown className="h-5 w-5" />
					</Button>

					<Button variant="ghost" size="icon" className="text-gray-600">
						<Mail className="h-5 w-5" />
					</Button>
				</div>
			</div>

			<div className="bg-white rounded-lg p-6">
				<div className="flex justify-between items-start mb-8">
					<h3 className="text-xl font-bold text-gray-800">Conta 001/2025</h3>
					<p className="text-gray-600">Vencimento: Sep 24, 2024</p>
				</div>

				<div className="mb-8">
					<Table className="w-full">
						<TableHeader>
							<TableRow className="border-b border-gray-200">
								<TableHead className="text-left py-3 text-sm font-medium text-gray-700">
									Nome
								</TableHead>
								<TableHead className="text-right py-3 text-sm font-medium text-gray-700">
									Valor Unitário
								</TableHead>
								<TableHead className="text-right py-3 text-sm font-medium text-gray-700">
									Parcelas
								</TableHead>
								<TableHead className="text-right py-3 text-sm font-medium text-gray-700">
									Valor Total
								</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableCell className="py-3 text-gray-700">
									Design Services
								</TableCell>
								<TableCell className="py-3 text-gray-700 text-right">
									$50
								</TableCell>
								<TableCell className="py-3 text-gray-700 text-right">
									10
								</TableCell>
								<TableCell className="py-3 text-gray-700 text-right">
									$500,00
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</div>

				<div className="flex justify-end mb-8">
					<div className="text-right">
						<p className="text-sm text-gray-600 mb-1">Total</p>
						<p className="text-2xl font-bold text-gray-800">$5,000.00</p>
					</div>
				</div>

				<div className="flex justify-center">
					<Button className="text-white w-full">Pagar Conta</Button>
				</div>
			</div>
		</div>
	);
}
