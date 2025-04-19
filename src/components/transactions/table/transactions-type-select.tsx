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
import { transactionTypesOptions } from "@/mocks/transaction-types-options";

type TransactionsTypeSelectProps = {
	transactionId: string;
	type: Transaction["type"];
};

export function TransactionsTypeSelect({
	transactionId,
	type,
}: TransactionsTypeSelectProps) {
	const [selectedType, setSelectedType] = React.useState<string>(type);
	const { updateTransactionFn } = useUpdateTransaction();

	function handleUpdateTransactionType(newType: Transaction["type"]) {
		if (newType === selectedType) {
			toast.error("O tipo selecionado é o mesmo do atual.");
			return;
		}

		setSelectedType(newType);
		updateTransactionFn({
			transactionId,
			data: {
				type: newType,
			},
		});
	}

	const typeConfig = {
		deposit:
			"text-green-600 bg-green-50 hover:bg-green-50 dark:text-green-300 dark:bg-green-900/20 dark:hover:bg-green-900/20",
		expense:
			"text-red-600 bg-red-50 hover:bg-red-50 dark:text-red-300 dark:bg-red-900/20 dark:hover:bg-red-900/20",
		investment:
			"text-blue-600 bg-blue-50 hover:bg-blue-50 dark:text-blue-300 dark:bg-blue-900/20 dark:hover:bg-blue-900/20",
	};

	return (
		<Select value={selectedType} onValueChange={handleUpdateTransactionType}>
			<SelectTrigger
				hasChevron={false}
				className={`w-[140px] border-none max-w-max px-4 py-0.5 bg-muted/50 max-h-max justify-start
        rounded-full text-xs hover:cursor-pointer hover:opacity-70 font-medium
        ${
					typeConfig[selectedType as keyof typeof typeConfig] ||
					"text-muted-foreground bg-muted hover:bg-muted"
				}`}
			>
				<SelectValue>
					{transactionTypesOptions.find((t) => t.value === selectedType)
						?.label || "Tipo"}
				</SelectValue>
			</SelectTrigger>

			<SelectContent>
				<SelectGroup>
					{transactionTypesOptions.map((option) => (
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
