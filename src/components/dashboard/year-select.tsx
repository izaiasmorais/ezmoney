import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export function YearSelect() {
	const years = [2018, 2019, 2020, 2021, 2022, 2023];

	return (
		<Select>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="This year" />
			</SelectTrigger>
			<SelectContent>
				{years.map((year) => {
					return (
						<SelectItem key={year} value={year.toString()}>
							{year}
						</SelectItem>
					);
				})}
			</SelectContent>
		</Select>
	);
}
