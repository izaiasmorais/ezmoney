import * as React from "react";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useUpdateTransaction } from "@/hooks/transactions/use-update-transaction";
import { toast } from "sonner";
import { Transaction } from "@/@types/transaction";
import { invoiceCategoryOptions } from "@/mocks/invoice-category-options";

type TransactionsCategorySelectProps = {
	transactionId: string;
	category: Transaction["category"];
};

export function TransactionsCategorySelect({
	transactionId,
	category,
}: TransactionsCategorySelectProps) {
	const [selectedCategory, setSelectedCategory] =
		React.useState<string>(category);
	const { updateTransactionFn } = useUpdateTransaction();

	function handleUpdateTransactionCategory(
		newCategory: Transaction["category"]
	) {
		if (newCategory === selectedCategory) {
			toast.error("A categoria selecionada é a mesma da atual.");
			return;
		}

		setSelectedCategory(newCategory);
		updateTransactionFn({
			transactionId,
			data: {
				category: newCategory,
			},
		});
	}

	return (
		<Select
			value={selectedCategory}
			onValueChange={handleUpdateTransactionCategory}
		>
			<SelectTrigger
				hasChevron={false}
				className={`w-[140px] border-none max-w-max px-4 py-0.5 max-h-max justify-start
        rounded-full text-xs hover:cursor-pointer hover:opacity-70
				text-muted-foreground bg-slate-50 font-medium
				dark:text-muted-foreground dark:bg-sidebar`}
			>
				<SelectValue>
					{invoiceCategoryOptions.find((c) => c.value === selectedCategory)
						?.label || "Categoria"}
				</SelectValue>
			</SelectTrigger>

			<SelectContent>
				<SelectGroup>
					{invoiceCategoryOptions.map((option) => (
						<SelectItem
							key={option.value}
							value={option.value}
							className="text-xs"
						>
							{option.label}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}
