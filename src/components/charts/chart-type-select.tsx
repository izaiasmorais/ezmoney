"use client";
import { ChartType } from "@/@types/chart";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useChart } from "@/stores/chart";
import { uppercaseFirstLetter } from "@/utils/uppercaseFirstLetter";

export function ChartTypeSelect() {
	const { onChangeChartType, chartType } = useChart((state) => {
		return {
			onChangeChartType: state.onChangeChartType,
			chartType: state.chartType,
		};
	});

	const types = ["line", "bar", "area", "scatter"];

	return (
		<Select
			value={chartType}
			onValueChange={(e) => onChangeChartType(e as ChartType)}
		>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="Chart type" />
			</SelectTrigger>

			<SelectContent>
				{types.map((type) => (
					<SelectItem key={type.toLowerCase()} value={type.toLowerCase()}>
						{uppercaseFirstLetter(type)}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
}
