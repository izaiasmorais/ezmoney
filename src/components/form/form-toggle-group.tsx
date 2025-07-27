"use client";
import type {
	Control,
	FieldValues,
	Path,
	UseFormReturn,
} from "react-hook-form";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface FormToggleGroupProps<TFieldValues extends FieldValues> {
	options: { label: string; value: string; icon?: React.ReactNode }[];
	translatedEntity: string;
	entity: Path<TFieldValues>;
	form: UseFormReturn<TFieldValues>;
	type?: "single" | "multiple";
	className?: string;
	alwaysSelected?: boolean;
}

export function FormToggleGroup<TFieldValues extends FieldValues>({
	options,
	form,
	entity,
	translatedEntity,
	className,
	type = "single",
	alwaysSelected = false,
}: FormToggleGroupProps<TFieldValues>) {
	return (
		<FormField
			control={form.control as Control<TFieldValues, unknown>}
			name={entity}
			render={({ field }) => (
				<FormItem className="flex flex-col items-start">
					<FormLabel>{translatedEntity}</FormLabel>

					<FormControl>
						<ToggleGroup
							type={type}
							value={field.value}
							onValueChange={(value: unknown) => {
								if (alwaysSelected && type === "single" && !value) {
									return;
								}
								field.onChange(value);
							}}
							className={className}
						>
							{options.map((option) => (
								<ToggleGroupItem
									key={option.value}
									value={option.value}
									aria-label={`Toggle ${option.label}`}
									className={
										field.value === option.value
											? "!bg-border border border-zinc-800/50"
											: ""
									}
								>
									{option.icon && (
										<span className="h-4 w-4">{option.icon}</span>
									)}
									{option.label}
								</ToggleGroupItem>
							))}
						</ToggleGroup>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
}
