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
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

interface FormSelectProps<TFieldValues extends FieldValues> {
	options: { label: string; value: string }[];
	translatedEntity: string;
	placeholder?: string;
	entity: Path<TFieldValues>;
	form: UseFormReturn<TFieldValues>;
}

export function FormSelect<TFieldValues extends FieldValues>({
	options,
	form,
	entity,
	translatedEntity,
	placeholder,
}: FormSelectProps<TFieldValues>) {
	return (
		<FormField
			control={form.control as Control<TFieldValues, unknown>}
			name={entity}
			render={({ field }) => (
				<FormItem className="flex flex-col items-start">
					<FormLabel>{translatedEntity}</FormLabel>

					<Select onValueChange={field.onChange} defaultValue={field.value}>
						<FormControl>
							<SelectTrigger className="w-full text-base md:text-sm hover:bg-accent">
								<SelectValue
									placeholder={placeholder || `Selecionar ${translatedEntity}`}
								/>
							</SelectTrigger>
						</FormControl>

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
					<FormMessage />
				</FormItem>
			)}
		/>
	);
}
