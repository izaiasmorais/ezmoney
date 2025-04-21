"use client";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { SquarePen } from "lucide-react";
import { useForm } from "react-hook-form";
import { useUpdateInvoice } from "@/hooks/invoices/use-update-invoice";
import { zodResolver } from "@hookform/resolvers/zod";
import { UpdateInvoiceRequest } from "@/api/invoices/update-invoice";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { InvoiceForm } from "../form/invoice-form";
import {
	CreateInvoiceRequest,
	Invoice,
	createInvoiceRequestSchema,
} from "@/@types/invoice";

interface UpdateInvoiceSheetProps {
	invoice: Invoice;
}

export function UpdateInvoiceSheet({ invoice }: UpdateInvoiceSheetProps) {
	const form = useForm<CreateInvoiceRequest>({
		resolver: zodResolver(createInvoiceRequestSchema),
		defaultValues: {
			name: invoice?.name || "",
			description: invoice?.description || "",
			status: invoice?.status || "pending",
			paymentType: invoice?.paymentType || "unique",
			category: invoice?.category || "general",
			createdAt: invoice?.createdAt || new Date().toISOString(),
			dueDate: invoice?.dueDate || new Date().toISOString(),
			unitValue: invoice?.unitValue || 0,
			installments: invoice?.installments || 1,
		},
	});

	const {
		updateInvoiceFn,
		isLoadingUpdateInvoice,
		isUpdateInvoiceDialogOpen,
		setIsUpdateInvoiceDialogOpen,
	} = useUpdateInvoice();

	const handleSubmit = async (formData: CreateInvoiceRequest) => {
		const updateRequest: UpdateInvoiceRequest = {
			invoiceId: invoice.id,
			data: formData,
		};

		await updateInvoiceFn(updateRequest);
	};

	return (
		<Sheet
			open={isUpdateInvoiceDialogOpen}
			onOpenChange={setIsUpdateInvoiceDialogOpen}
		>
			<SheetTrigger asChild>
				<DropdownMenuItem onSelect={(e) => e.preventDefault()}>
					<SquarePen />
					Editar
				</DropdownMenuItem>
			</SheetTrigger>

			<SheetContent
				className="w-full sm:max-w-[600px] md:max-w-[800px] overflow-y-auto gap-0
			outline-none"
			>
				<SheetHeader className="p-6">
					<SheetTitle>Editar Conta</SheetTitle>
					<SheetDescription>
						Altere as informações de uma conta.
					</SheetDescription>
				</SheetHeader>

				<InvoiceForm
					form={form}
					handleSubmitForm={form.handleSubmit(handleSubmit)}
					isLoadingCreateInvoice={isLoadingUpdateInvoice}
					onClickCancel={() => setIsUpdateInvoiceDialogOpen(false)}
					className="!w-full border-none pt-0"
				/>
			</SheetContent>
		</Sheet>
	);
}
