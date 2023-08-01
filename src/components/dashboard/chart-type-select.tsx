"use client";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useStore } from "@/store";
import { uppercaseFirstLetter } from "@/utils/uppercaseFirstLetter";

export function ChartTypeSelect() {
	const update = useStore((state) => state.update);
	const type = useStore((state) => state.type);

	const types = ["line", "area", "bar", "scatter"];

	return (
		<Select value={type} onValueChange={(e) => update(e)}>
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
