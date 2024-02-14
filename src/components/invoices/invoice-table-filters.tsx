import { Search, X } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";
import { DatePicker } from "../global/date-picker";

export function InvoiceTableFilters() {
	return (
		<form className="flex items-center gap-2">
			<span className="text-sm font-semibold">Filtros: </span>
			<Input className="h-8 w-[320px]" placeholder="Nome da conta" />

			<Select defaultValue="all">
				<SelectTrigger className="h-8 w-[180px]">
					<SelectValue />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="all">Status</SelectItem>
					<SelectItem value="pending">Pendente</SelectItem>
					<SelectItem value="paid">Paga</SelectItem>
					<SelectItem value="overdue">Atrasada</SelectItem>
					<SelectItem value="postponed">Adiada</SelectItem>
				</SelectContent>
			</Select>

			<Select defaultValue="all">
				<SelectTrigger className="h-8 w-[180px]">
					<SelectValue />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="all">Categoria</SelectItem>
					<SelectItem value="alimetation">Alimentação</SelectItem>
					<SelectItem value="transport">Transporte</SelectItem>
					<SelectItem value="invoice">Conta</SelectItem>
					<SelectItem value="shopping">Compra</SelectItem>
				</SelectContent>
			</Select>

			<DatePicker name="Validade" style="h-8 w-[200px]" />

			<Button type="submit" variant="secondary" size="xs">
				<Search className="mr-2 h-4 w-4" />
				Filtrar resultados
			</Button>

			<Button type="button" variant="outline" size="xs">
				<X className="mr-2 h-4 w-4" />
				Limpar resultados
			</Button>
		</form>
	);
}
