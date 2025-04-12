"use client";

import * as React from "react";
import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
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
import { Button } from "@/components/ui/button";

interface FormMultiSelectProps {
	options: { label: string; value: string }[];
	placeholder?: string;
	onChange?: (value: string[]) => void;
	className?: string;
	defaultValues?: string[];
}

export function FormMultiSelect({
	options,
	placeholder = "Selecionar opções...",
	onChange,
	className,
	defaultValues = [],
}: FormMultiSelectProps) {
	const [open, setOpen] = React.useState(false);
	const [selectedValues, setSelectedValues] =
		React.useState<string[]>(defaultValues);

	const selectedLabels = React.useMemo(() => {
		return selectedValues.map(
			(value) =>
				options.find((option) => option.value === value)?.label || value
		);
	}, [selectedValues, options]);

	const handleSelect = React.useCallback(
		(value: string) => {
			const newSelectedValues = selectedValues.includes(value)
				? selectedValues.filter((v) => v !== value)
				: [...selectedValues, value];

			setSelectedValues(newSelectedValues);
			onChange?.(newSelectedValues);
		},
		[selectedValues, onChange]
	);

	const handleRemove = React.useCallback(
		(value: string) => {
			const newSelectedValues = selectedValues.filter((v) => v !== value);
			setSelectedValues(newSelectedValues);
			onChange?.(newSelectedValues);
		},
		[selectedValues, onChange]
	);

	const handleClear = React.useCallback(() => {
		setSelectedValues([]);
		onChange?.([]);
	}, [onChange]);

	const handleSelectAll = React.useCallback(() => {
		const allValues = options.map((option) => option.value);
		if (selectedValues.length === options.length) {
			setSelectedValues([]);
			onChange?.([]);
		} else {
			setSelectedValues(allValues);
			onChange?.(allValues);
		}
	}, [options, onChange, selectedValues]);

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={open}
					className={cn("w-full xl:w-[180px] justify-between", className)}
				>
					{selectedValues.length > 0 ? (
						<div className="flex flex-wrap gap-1 max-w-full overflow-hidden">
							{selectedValues.length === 1 ? (
								<span className="truncate">{selectedLabels[0]}</span>
							) : (
								<span>{selectedValues.length} selecionados</span>
							)}
						</div>
					) : (
						<span className="text-muted-foreground">{placeholder}</span>
					)}
				</Button>
			</PopoverTrigger>

			<PopoverContent className="w-full p-0" align="start">
				<Command>
					<CommandInput placeholder="Buscar opção..." />

					<CommandList>
						<CommandEmpty>Nenhuma opção encontrada.</CommandEmpty>
						<CommandGroup className="max-h-64 overflow-auto">
							<CommandItem
								value="__select_all__"
								onSelect={() => handleSelectAll()}
								className="border-b"
							>
								<div className="flex items-center gap-2 w-full font-medium cursor-pointer">
									<div
										className={cn(
											"flex h-4 w-4 cursor-pointer items-center justify-center rounded-sm border border-primary",
											selectedValues.length === options.length
												? "bg-primary text-primary-foreground"
												: "opacity-50"
										)}
									>
										{selectedValues.length === options.length && (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="h-3 w-3 text-white"
											>
												<polyline points="20 6 9 17 4 12" />
											</svg>
										)}
									</div>

									<span>Selecionar todos</span>
								</div>
							</CommandItem>
							{options.map((option) => {
								const isSelected = selectedValues.includes(option.value);
								return (
									<CommandItem
										key={option.value}
										value={option.value}
										onSelect={() => handleSelect(option.value)}
									>
										<div className="flex items-center gap-2 w-full cursor-pointer">
											<div
												className={cn(
													"flex h-4 w-4  items-center justify-center rounded-sm border border-primary",
													isSelected
														? "bg-primary text-primary-foreground"
														: "opacity-50"
												)}
											>
												{isSelected && (
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 24 24"
														fill="none"
														stroke="currentColor"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
														className="h-3 w-3 text-white"
													>
														<polyline points="20 6 9 17 4 12" />
													</svg>
												)}
											</div>
											<span>{option.label}</span>
										</div>
									</CommandItem>
								);
							})}
						</CommandGroup>
					</CommandList>
					{selectedValues.length > 0 && (
						<div className="border-t p-2">
							<div className="flex flex-wrap gap-1 mb-2">
								{selectedValues.map((value) => {
									const label =
										options.find((option) => option.value === value)?.label ||
										value;
									return (
										<Badge
											key={value}
											variant="secondary"
											className="mr-1 mb-1"
										>
											{label}
											<button
												className="ml-1 ring-offset-background rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
												onKeyDown={(e) => {
													if (e.key === "Enter") {
														handleRemove(value);
													}
												}}
												onMouseDown={(e) => {
													e.preventDefault();
													e.stopPropagation();
												}}
												onClick={() => handleRemove(value)}
											>
												<X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
											</button>
										</Badge>
									);
								})}
							</div>
							<Button
								variant="outline"
								size="sm"
								className="w-full mt-1"
								onClick={(e) => {
									e.preventDefault();
									e.stopPropagation();
									handleClear();
								}}
							>
								Limpar seleção
							</Button>
						</div>
					)}
				</Command>
			</PopoverContent>
		</Popover>
	);
}
