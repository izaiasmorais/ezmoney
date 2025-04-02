import * as React from "react";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface FormSelectProps {
	options: { label: string; value: string }[];
	placeholder?: string;
	onChange?: (value: string) => void;
	className?: string;
}

export function FormSelect({
	options,
	placeholder,
	onChange,
	className,
}: FormSelectProps) {
	return (
		<Select onValueChange={onChange}>
			<SelectTrigger className={cn(`w-[140px]`, className)}>
				<SelectValue placeholder={placeholder} />
			</SelectTrigger>

			<SelectContent>
				<SelectGroup>
					{options.map((option) => (
						<SelectItem key={option.value} value={option.value}>
							{option.label}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}
