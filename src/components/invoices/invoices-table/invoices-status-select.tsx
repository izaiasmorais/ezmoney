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

export function InvoiceStatusSelect({
	invoiceId,
	status,
}: UpdateInvoiceStatusRequest) {
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

	return (
		<Select value={selectedStatus} onValueChange={handleUpdateInvoiceStatus}>
			<SelectTrigger
				hasChevron={false}
				className={`w-[140px] border-none max-w-max px-4 py-0.5 bg-muted/50 max-h-max justify-start
			rounded-full text-xs hover:cursor-pointer hover:opacity-70 ${
				status === "paid"
					? "text-green-600 bg-green-50 hover:bg-green-50"
					: status === "overdue"
					? "text-red-600 bg-red-50 hover:bg-red-50"
					: status === "pending"
					? "text-yellow-600 bg-yellow-50 hover:bg-yellow-50"
					: status === "draft"
					? "text-indigo-600 bg-indigo-50 hover:bg-indigo-50"
					: "text-muted-foreground bg-muted hover:bg-muted"
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
