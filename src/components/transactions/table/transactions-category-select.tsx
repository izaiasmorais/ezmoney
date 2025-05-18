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
	transaction: Transaction;
};

export function TransactionsCategorySelect({
	transaction,
}: TransactionsCategorySelectProps) {
	const [selectedCategory, setSelectedCategory] = React.useState<string>(
		transaction.category
	);
	const { updateTransactionFn } = useUpdateTransaction(transaction);

	function handleUpdateTransactionCategory(
		newCategory: Transaction["category"]
	) {
		if (newCategory === selectedCategory) {
			toast.error("A categoria selecionada é a mesma da atual.");
			return;
		}

		setSelectedCategory(newCategory);
		updateTransactionFn({
			transactionId: transaction.id,
			data: {
				...transaction,
				category: newCategory,
			},
		});
	}

	const categoryConfig = {
		subscription:
			"text-violet-600 bg-violet-50 hover:bg-violet-50 dark:text-violet-400 dark:bg-violet-900/20 dark:hover:bg-violet-900/20",
		general:
			"text-red-600 bg-red-50 hover:bg-red-50 dark:text-red-400 dark:bg-red-900/20 dark:hover:bg-red-900/20",
		loan: "text-blue-600 bg-blue-50 hover:bg-blue-50 dark:text-blue-400 dark:bg-blue-900/20 dark:hover:bg-blue-900/20",
		purchase:
			"text-green-600 bg-green-50 hover:bg-green-50 dark:text-green-400 dark:bg-green-900/20 dark:hover:bg-green-900/20",
		streaming:
			"text-yellow-600 bg-yellow-50 hover:bg-yellow-50 dark:text-yellow-400 dark:bg-yellow-900/20 dark:hover:bg-yellow-900/20",
	};

	return (
		<Select
			value={selectedCategory}
			onValueChange={handleUpdateTransactionCategory}
		>
			<SelectTrigger
				hasChevron={false}
				className={`w-[140px] border-none max-w-max px-4 py-0.5 max-h-max justify-start
        rounded-full text-xs hover:cursor-pointer hover:opacity-70
				bg-slate-50 font-medium	dark:text-muted-foreground dark:bg-sidebar
				${
					categoryConfig[selectedCategory as keyof typeof categoryConfig] ||
					"text-muted-foreground bg-muted hover:bg-muted"
				}
				`}
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
