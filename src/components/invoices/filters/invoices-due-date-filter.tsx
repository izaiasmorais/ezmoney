"use client";
import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { ptBR } from "date-fns/locale";
import { DateRange } from "react-day-picker";
import { useQueryClient } from "@tanstack/react-query";
import { getInvoices } from "@/api/invoices/get-invoices";

interface InvoicesDueDateFilterProps {}

export function InvoicesDueDateFilter({}: InvoicesDueDateFilterProps) {
	const [date, setDate] = React.useState<DateRange | undefined>();
	const queryClient = useQueryClient();

	const handleDateChange = async (selectedDate: DateRange | undefined) => {
		setDate(selectedDate);

		if (!selectedDate || (!selectedDate.from && !selectedDate.to)) {
			await queryClient.invalidateQueries({ queryKey: ["invoices"] });
			return;
		}

		const params: { startDate?: string; endDate?: string } = {};

		if (selectedDate.from) {
			params.startDate = format(selectedDate.from, "yyyy-MM-dd");
		}

		if (selectedDate.to) {
			params.endDate = format(selectedDate.to, "yyyy-MM-dd");
		}

		if (!params.startDate && !params.endDate) {
			await queryClient.invalidateQueries({ queryKey: ["invoices"] });
			return;
		}

		if (!params.endDate) {
			params.endDate = params.startDate;
		}

		const result = await getInvoices({
			startDate: params.startDate + "T00:00:00.000Z",
			endDate: params.endDate + "T23:59:59.999Z",
		});

		queryClient.setQueryData(["invoices"], result);
	};

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					className={cn(
						"w-full md:max-w-max justify-start text-left font-normal",
						!date && "text-muted-foreground"
					)}
				>
					<CalendarIcon className="mr-2 h-4 w-4" />
					{date?.from ? (
						date.to ? (
							<>
								{format(date.from, "dd/MM/yyyy")} -{" "}
								{format(date.to, "dd/MM/yyyy")}
							</>
						) : (
							format(date.from, "dd/MM/yyyy")
						)
					) : (
						<span>Data de vencimento</span>
					)}
				</Button>
			</PopoverTrigger>

			<PopoverContent className="w-auto p-0" align="start">
				<Calendar
					initialFocus
					mode="range"
					defaultMonth={date?.from}
					locale={ptBR}
					selected={date}
					onSelect={handleDateChange}
					numberOfMonths={2}
				/>
			</PopoverContent>
		</Popover>
	);
}
