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
import { UpdateInvoiceStatusRequest } from "@/@types/invoice";
import { invoiceStatusOptions } from "@/mocks/invoice-status-options";

type InvoiceStatusSelectProps = {
	invoiceId: string;
	status: UpdateInvoiceStatusRequest["status"];
};

export function InvoiceStatusSelect({
	invoiceId,
	status,
}: InvoiceStatusSelectProps) {
	const [selectedStatus, setSelectedStatus] = React.useState<string>(status);
	const { updateInvoiceFn } = useUpdateInvoice();

	function handleUpdateInvoiceStatus(
		newStatus: UpdateInvoiceStatusRequest["status"]
	) {
		if (newStatus === selectedStatus) {
			toast.error("O status selecionado é o mesmo do atual.");
			return;
		}

		setSelectedStatus(newStatus);
		updateInvoiceFn({
			invoiceId,
			data: {
				status: newStatus,
			},
		});
	}

	const statusConfig = {
		paid: "text-green-600 bg-green-50 hover:bg-green-50 dark:text-green-300 dark:bg-green-900/20 dark:hover:bg-green-900/20",
		overdue:
			"text-red-600 bg-red-50 hover:bg-red-50 dark:text-red-300 dark:bg-red-900/20 dark:hover:bg-red-900/20",
		pending:
			"text-yellow-600 bg-yellow-50 hover:bg-yellow-50 dark:text-yellow-300 dark:bg-yellow-900/20 dark:hover:bg-yellow-900/20",
		draft:
			"text-violet-600 bg-violet-50 hover:bg-violet-50 dark:text-violet-300 dark:bg-violet-900/20 dark:hover:bg-violet-900/20",
	};

	return (
		<Select value={selectedStatus} onValueChange={handleUpdateInvoiceStatus}>
			<SelectTrigger
				hasChevron={false}
				className={`w-[140px] border-none max-w-max px-4 py-0.5 bg-muted/50 max-h-max justify-start
        rounded-full text-xs hover:cursor-pointer hover:opacity-70
        ${
					statusConfig[selectedStatus as keyof typeof statusConfig] ||
					"text-muted-foreground bg-muted hover:bg-muted"
				}`}
			>
				<SelectValue>
					{invoiceStatusOptions.find((s) => s.value === selectedStatus)
						?.label || "Status"}
				</SelectValue>
			</SelectTrigger>

			<SelectContent>
				<SelectGroup>
					{invoiceStatusOptions.map((option) => (
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
