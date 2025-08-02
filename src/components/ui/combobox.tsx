"use client";
import { Check, ChevronsUpDown } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface ComboboxProps {
	items: { label: string; value: string }[];
	entity: string;
	translatedEntity: string;
	placeholder?: string;
	emptyMessage?: string;
	onChange?: (value: string) => void;
	className?: string;
	defaultValue?: string;
}

export function Combobox({
	items,
	placeholder,
	translatedEntity,
	onChange,
	emptyMessage,
	className,
	defaultValue,
}: ComboboxProps) {
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState(defaultValue || "");

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					aria-expanded={open}
					className={cn("justify-between", className)}
				>
					{value
						? items.find((item) => item.value === value)?.label
						: placeholder}
					<ChevronsUpDown className="opacity-50" />
				</Button>
			</PopoverTrigger>

			<PopoverContent className="p-0">
				<Command>
					<CommandInput
						placeholder={`Pesquisar ${translatedEntity}`}
						className="h-9"
					/>
					<CommandList>
						<CommandEmpty>
							{emptyMessage || `Nenhum item encontrado`}
						</CommandEmpty>

						<CommandGroup>
							{items.map((item) => (
								<CommandItem
									key={item.value}
									value={item.value}
									onSelect={(currentValue: string) => {
										setValue(currentValue === value ? "" : currentValue);
										setOpen(false);
										onChange?.(currentValue);
									}}
								>
									{item.label}
									<Check
										className={cn(
											"ml-auto",
											value === item.value ? "opacity-100" : "opacity-0"
										)}
									/>
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
