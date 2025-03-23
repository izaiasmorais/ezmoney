import * as React from "react";

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

interface TransactionsYearSelectProps {
	onChange: (year: number) => void;
	defaultYear?: number;
}

export function TransactionsYearSelect({
	onChange,
	defaultYear = new Date().getFullYear(),
}: TransactionsYearSelectProps) {
	const years = Array.from({ length: 6 }, (_, index) => 2020 + index);

	return (
		<Select
			defaultValue={defaultYear.toString()}
			onValueChange={(value) => onChange(Number(value))}
		>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="Selecione um ano" />
			</SelectTrigger>

			<SelectContent>
				<SelectGroup>
					<SelectLabel>Anos</SelectLabel>
					{years.map((year) => (
						<SelectItem key={year} value={year.toString()}>
							{year}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}
