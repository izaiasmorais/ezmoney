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
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { Controller, useForm } from "react-hook-form";
import { DateRangePicker } from "../ui/date-range-picker";
import { zodResolver } from "@hookform/resolvers/zod";
import { DateRange } from "react-day-picker";
import { z } from "zod";

const invoiceFilterSchema = z.object({
	invoiceId: z.string().optional(),
	invoiceName: z.string().optional(),
	status: z.string().optional(),
});

type InvoiceFilterSchema = z.infer<typeof invoiceFilterSchema>;

interface InvoiceTableFiltersProps {
	dateRange: DateRange | undefined;
	setDateRange: Dispatch<SetStateAction<DateRange | undefined>>;
}

export function InvoiceTableFilters({
	dateRange,
	setDateRange,
}: InvoiceTableFiltersProps) {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const invoiceId = searchParams.get("invoiceId");
	const invoiceName = searchParams.get("invoiceName");
	const status = searchParams.get("status");

	const { register, handleSubmit, control, reset } =
		useForm<InvoiceFilterSchema>({
			// @ts-ignore
			resolver: zodResolver(invoiceFilterSchema),
			defaultValues: {
				invoiceId: invoiceId ?? "",
				invoiceName: invoiceName ?? "",
				status: status ?? "all",
			},
		});

	function handleFilter({
		invoiceId,
		invoiceName,
		status,
	}: InvoiceFilterSchema) {
		const state = new URLSearchParams(Array.from(searchParams.entries()));

		if (invoiceId) {
			state.set("invoiceId", invoiceId);
		} else {
			state.delete("invoiceId");
		}

		if (invoiceName) {
			state.set("invoiceName", invoiceName);
		} else {
			state.delete("invoiceName");
		}

		if (status) {
			state.set("status", status);
		} else {
			state.delete("status");
		}

		state.set("page", "1");
		const search = state.toString();
		const query = search ? `?${search}` : "";

		router.push(`${pathname}${query}`);
	}

	return (
		<form
			className="flex items-center gap-2"
			onSubmit={handleSubmit(handleFilter)}
		>
			<span className="text-sm font-semibold">Filtros: </span>

			<Input
				className="h-8 w-[200px]"
				placeholder="Id da conta"
				{...register("invoiceId")}
			/>

			<Input
				className="h-8 w-[200px]"
				placeholder="Nome da conta"
				{...register("invoiceName")}
			/>

			<DateRangePicker date={dateRange} onDateChange={setDateRange} />

			<Controller
				name="status"
				control={control}
				render={({ field: { name, onChange, value, disabled } }) => {
					return (
						<Select
							defaultValue="all"
							name={name}
							onValueChange={onChange}
							value={value}
							disabled={disabled}
						>
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
					);
				}}
			/>

			{/* <Select defaultValue="all">
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
			</Select> */}

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
