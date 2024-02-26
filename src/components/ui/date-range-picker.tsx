import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { ComponentProps } from "react";
import { DateRange } from "react-day-picker";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import ptBR from "date-fns/locale/pt-BR";

interface DateRangePickerProps extends ComponentProps<"div"> {
	date: DateRange | undefined;
	onDateChange: (date: DateRange | undefined) => void;
}

export function DateRangePicker({
	date,
	onDateChange,
	className,
}: DateRangePickerProps) {
	return (
		<div className={cn("grid gap-2 w-full", className)}>
			<Popover>
				<PopoverTrigger asChild>
					<Button
						id="date"
						variant={"outline"}
						className={cn(
							"justify-start px-3 text-left font-normal h-8",
							!date && "text-muted-foreground"
						)}
					>
						<CalendarIcon className="mr-2 h-4 w-4" />
						{date?.from ? (
							date.to ? (
								<>
									{format(date.from, "dd/MM/yyyy", { locale: ptBR })} -{" "}
									{format(date.to, "dd/MM/yyyy", { locale: ptBR })}
								</>
							) : (
								format(date.from, "dd/MM/yyyy", { locale: ptBR })
							)
						) : (
							<span>Escolha uma data</span>
						)}
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-auto p-0" align="start">
					<Calendar
						initialFocus
						mode="range"
						defaultMonth={date?.from}
						selected={date}
						onSelect={onDateChange}
						numberOfMonths={2}
					/>
				</PopoverContent>
			</Popover>
		</div>
	);
}
