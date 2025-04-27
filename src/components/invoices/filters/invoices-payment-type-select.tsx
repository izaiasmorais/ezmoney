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
import { invoicePaymentTypeOptions } from "@/mocks/invoice-payment-type-options";

type InvoicePaymentTypeSelectProps = {
	invoiceId: string;
	paymentType: Invoice["paymentType"];
};

export function InvoicePaymentTypeSelect({
	invoiceId,
	paymentType,
}: InvoicePaymentTypeSelectProps) {
	const [selectedPaymentType, setSelectedPaymentType] =
		React.useState<string>(paymentType);
	const { updateInvoiceFn } = useUpdateInvoice();

	function handleUpdateInvoicePaymentType(
		newPaymentType: Invoice["paymentType"]
	) {
		if (newPaymentType === selectedPaymentType) {
			toast.error("O tipo de pagamento selecionado é o mesmo do atual.");
			return;
		}

		setSelectedPaymentType(newPaymentType);
		updateInvoiceFn({
			invoiceId,
			data: {
				paymentType: newPaymentType,
			},
		});
	}

	return (
		<Select
			value={selectedPaymentType}
			onValueChange={handleUpdateInvoicePaymentType}
		>
			<SelectTrigger
				hasChevron={false}
				className={`w-[140px] border-none max-w-max px-4 py-0.5 max-h-max justify-start
        rounded-full text-xs hover:cursor-pointer hover:opacity-70
				text-muted-foreground bg-slate-50 font-medium
				dark:text-muted-foreground dark:bg-sidebar`}
			>
				<SelectValue>
					{invoicePaymentTypeOptions.find(
						(p) => p.value === selectedPaymentType
					)?.label || "Tipo de pagamento"}
				</SelectValue>
			</SelectTrigger>

			<SelectContent>
				<SelectGroup>
					{invoicePaymentTypeOptions.map((option) => (
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
