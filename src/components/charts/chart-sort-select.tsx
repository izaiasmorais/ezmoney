import { uppercaseFirstLetter } from "@/utils/uppercaseFirstLetter";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";
import { useChart } from "@/stores/chart";

export function ChartSortSelect() {
	const sorts = ["day", "month", "year"];
	const { setEarnChartSortType, earnChartSortType } = useChart((state) => {
		return {
			setEarnChartSortType: state.setEarnChartSortType,
			earnChartSortType: state.earnChartSortType,
		};
	});

	return (
		<Select value={earnChartSortType} onValueChange={setEarnChartSortType}>
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
