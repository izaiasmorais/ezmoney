"use client";
import type { FieldValues, Path, UseFormReturn } from "react-hook-form";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface FormInputProps<TFieldValues extends FieldValues> {
	form: UseFormReturn<TFieldValues>;
	entity: Path<TFieldValues>;
	label?: string;
	placeholder?: string;
	type?: "text" | "password" | "email" | "number" | "textarea";
	className?: string;
	min?: number;
	max?: number;
}

export function FormInput<TFieldValues extends FieldValues>({
	form,
	label,
	entity,
	type = "text",
	placeholder,
	className = "",
	min = undefined,
	max = undefined
}: FormInputProps<TFieldValues>) {
	return (
		<FormField
			control={form.control}
			name={entity}
			render={({ field }) => (
				<FormItem className={`flex flex-col text-left ${className}`}>
					{label && <FormLabel>{label}</FormLabel>}

					<FormControl>
						{type === "textarea" ? (
							<Textarea
								id={entity}
								placeholder={
									placeholder || `Digite ${entity ? `o ${entity}` : ""}`
								}
								{...field}
							/>
						) : (
							<Input
								type={type}
								id={entity}
								min={min}
								max={max}
								placeholder={
									placeholder || `Digite ${entity ? `o ${entity}` : ""}`
								}
								{...field}
							/>
						)}
					</FormControl>

					<FormMessage />
				</FormItem>
			)}
		/>
	);
}
