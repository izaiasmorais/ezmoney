import { Mail } from "lucide-react";
import { FileText } from "lucide-react";


export function InvoiceExportButtons() {
	return (
		<div className="flex items-center gap-2">
			<div
				className="flex text-sm items-center gap-2 rounded-full hover:bg-sidebar border
						border-transparent hover:border-border px-4 py-2 font-medium cursor-pointer"
			>
				<FileText size={16} className="text-muted-foreground" /> PDF
			</div>

			<div
				className="flex text-sm items-center gap-2 rounded-full hover:bg-sidebar border
						border-transparent hover:border-border px-4 py-2 font-medium cursor-pointer"
			>
				<Mail size={16} className="text-muted-foreground" /> Email
			</div>
		</div>
	);
}
