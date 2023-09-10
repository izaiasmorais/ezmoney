import { uppercaseFirstLetter } from "@/utils/uppercaseFirstLetter";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";
import { useChart } from "@/stores/chart";

export function ProfitChartSortSelect() {
	const sorts = ["day", "month", "year"];
	const { setProfitChartSortType, profitChartSortType } = useChart((state) => {
		return {
			setProfitChartSortType: state.setProfitChartSortType,
			profitChartSortType: state.profitChartSortType,
		};
	});

	return (
		<Select value={profitChartSortType} onValueChange={setProfitChartSortType}>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="Sort by" />
			</SelectTrigger>

			<SelectContent>
				{sorts.map((sort) => (
					<SelectItem key={sort} value={sort}>
						{uppercaseFirstLetter(sort)}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
}
