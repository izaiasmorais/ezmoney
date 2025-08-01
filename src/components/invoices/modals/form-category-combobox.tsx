"use client";
import { Check, ChevronsUpDown, Loader } from "lucide-react";
import { useEffect, useState } from "react";
import type {
	Control,
	FieldValues,
	Path,
	UseFormReturn,
} from "react-hook-form";
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
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { useCreateCategory } from "@/hooks/categories/use-create-category";
import { cn } from "@/lib/utils";
import { generateHexColor } from "@/utils/generate-hex-color";

interface ComboboxProps<TFieldValues extends FieldValues> {
	options: { label: string; value: string; color: string }[];
	translatedEntity: string;
	placeholder?: string;
	emptyMessage?: string;
	entity: Path<TFieldValues>;
	form: UseFormReturn<TFieldValues>;
}

export function FormCategoryCombobox<TFieldValues extends FieldValues>({
	options,
	form,
	entity,
	translatedEntity,
	placeholder,
}: ComboboxProps<TFieldValues>) {
	const [open, setOpen] = useState(false);
	const [search, setSearch] = useState("");
	const [hasRequestedCreate, setHasRequestedCreate] = useState(false);

	const { createCategory, isLoadingCreateCategory } = useCreateCategory();

	const color = generateHexColor();

	function handleCreateCategory() {
		setHasRequestedCreate(true);
		createCategory({
			name: search,
			color,
		});
	}

	useEffect(() => {
		if (hasRequestedCreate && !isLoadingCreateCategory) {
			setOpen(false);
			setHasRequestedCreate(false);
			setSearch("");
		}
	}, [isLoadingCreateCategory, hasRequestedCreate]);

	return (
		<FormField
			control={form.control as Control<TFieldValues, unknown>}
			name={entity}
			render={({ field }) => (
				<FormItem className="flex flex-col">
					<FormLabel>{translatedEntity}</FormLabel>

					<Popover open={open} onOpenChange={setOpen}>
						<PopoverTrigger asChild>
							<FormControl>
								<Button
									variant="outline"
									aria-expanded={open}
									className={cn(
										"justify-between text-base md:text-sm bg-transparent",
										"!bg-card dark:!border-zinc-800/50 dark:focus-visible:!border-zinc-800",
										!field.value && "text-muted-foreground"
									)}
								>
									<div className="flex items-center gap-2">
										{field.value && (
											<div
												className="w-3 h-3 rounded-full"
												style={{
													backgroundColor: options.find(
														(option) => option.value === field.value
													)?.color,
												}}
											/>
										)}
										{field.value
											? options.find((option) => option.value === field.value)
													?.label
											: `Selecionar ${translatedEntity}`}
									</div>
									<ChevronsUpDown className="opacity-50" size={16} />
								</Button>
							</FormControl>
						</PopoverTrigger>

						<PopoverContent className="p-0">
							<Command>
								<CommandInput
									value={search}
									onValueChange={setSearch}
									placeholder={
										placeholder ||
										`Pesquisar ${translatedEntity.toLocaleLowerCase()}...`
									}
									className="h-9"
								/>
								<CommandList>
									<CommandEmpty className="p-0" onClick={handleCreateCategory}>
										<div
											className="flex items-center gap-2 hover:bg-muted cursor-pointer
										px-4 py-2 h-8"
										>
											{isLoadingCreateCategory && (
												<Loader className="animate-spin mx-auto w-3 h-3" />
											)}

											{!isLoadingCreateCategory && (
												<>
													<div
														className="w-3 h-3 rounded-full"
														style={{
															backgroundColor: color,
														}}
													/>
													<span className="text-sm">
														Criar a categoria <strong>{search}</strong>
													</span>
												</>
											)}
										</div>
									</CommandEmpty>

									<CommandGroup>
										{options.map((option) => (
											<CommandItem
												value={option.label}
												key={option.value}
												onSelect={() => {
													field.onChange(option.value);
													setOpen(false);
												}}
											>
												<div
													className="w-3 h-3 rounded-full"
													style={{ backgroundColor: option.color }}
												/>
												{option.label}
												<Check
													className={cn(
														"ml-auto",
														option.value === field.value
															? "opacity-100"
															: "opacity-0"
													)}
												/>
											</CommandItem>
										))}
									</CommandGroup>
								</CommandList>
							</Command>
						</PopoverContent>
					</Popover>

					<FormMessage />
				</FormItem>
			)}
		/>
	);
}
