"use client";

import {
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from "@/components/ui/form";
import type { FieldValues, Path, UseFormReturn } from "react-hook-form";
import { Input } from "@/components/ui/input";

interface FormColorPickerProps<TFieldValues extends FieldValues> {
	form: UseFormReturn<TFieldValues>;
	entity: Path<TFieldValues>;
	label?: string;
	placeholder?: string;
	className?: string;
	defaultColor?: string;
}

export function FormColorPicker<TFieldValues extends FieldValues>({
	form,
	label,
	entity,
	placeholder,
	className = "",
	defaultColor = "#000000",
}: FormColorPickerProps<TFieldValues>) {
	return (
		<FormField
			control={form.control}
			name={entity}
			render={({ field }) => (
				<FormItem className={`flex flex-col text-left ${className}`}>
					{label && <FormLabel>{label}</FormLabel>}
					<FormControl>
						<div className="flex items-center gap-3">
							<Input
								type="color"
								id={`${entity}-color`}
								className="w-16 h-10 p-1 border rounded cursor-pointer"
								value={field.value || defaultColor}
								onChange={(e) => field.onChange(e.target.value)}
							/>
							
							<Input
								type="text"
								placeholder={placeholder || "Selecione uma cor"}
								className="flex-1"
								value={field.value || defaultColor}
								onChange={(e) => {
									const value = e.target.value;
									// Validar se é um hex válido ou string vazia
									if (/^#[0-9A-F]{6}$/i.test(value) || value === "") {
										field.onChange(value);
									}
								}}
							/>
						</div>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
}
