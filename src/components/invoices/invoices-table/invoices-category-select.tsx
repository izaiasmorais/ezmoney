import * as React from "react";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useUpdateInvoice } from "@/hooks/invoices/use-update-invoice";
import { toast } from "sonner";
import { Invoice } from "@/@types/invoice";
import { invoiceCategoryOptions } from "@/mocks/invoice-category-options";

type InvoiceCategorySelectProps = {
	invoiceId: string;
	category: Invoice["category"];
};

export function InvoiceCategorySelect({
	invoiceId,
	category,
}: InvoiceCategorySelectProps) {
	const [selectedCategory, setSelectedCategory] =
		React.useState<string>(category);
	const { updateInvoiceFn } = useUpdateInvoice();

	function handleUpdateInvoiceCategory(newCategory: Invoice["category"]) {
		if (newCategory === selectedCategory) {
			toast.error("A categoria selecionada é a mesma da atual.");
			return;
		}

		setSelectedCategory(newCategory);
		updateInvoiceFn({
			invoiceId,
			data: {
				category: newCategory,
			},
		});
	}

	const categoryConfig = {
		subscription:
			"text-violet-600 bg-violet-50 hover:bg-violet-50 dark:text-violet-300 dark:bg-violet-900/20 dark:hover:bg-violet-900/20",
		general:
			"text-red-600 bg-red-50 hover:bg-red-50 dark:text-red-300 dark:bg-red-900/20 dark:hover:bg-red-900/20",
		loan: "text-blue-600 bg-blue-50 hover:bg-blue-50 dark:text-blue-300 dark:bg-blue-900/20 dark:hover:bg-blue-900/20",
		purchase:
			"text-green-600 bg-green-50 hover:bg-green-50 dark:text-green-300 dark:bg-green-900/20 dark:hover:bg-green-900/20",
		streaming:
			"text-yellow-600 bg-yellow-50 hover:bg-yellow-50 dark:text-yellow-300 dark:bg-yellow-900/20 dark:hover:bg-yellow-900/20",
	};

	return (
		<Select
			value={selectedCategory}
			onValueChange={handleUpdateInvoiceCategory}
		>
			<SelectTrigger
				hasChevron={false}
				className={`w-[140px] border-none max-w-max px-4 py-0.5 bg-muted/50 max-h-max justify-start
        rounded-full text-xs hover:cursor-pointer hover:opacity-70
        ${
					categoryConfig[selectedCategory as keyof typeof categoryConfig] ||
					"text-muted-foreground bg-muted hover:bg-muted"
				}`}
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
