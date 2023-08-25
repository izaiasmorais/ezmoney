import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { MoreVertical } from "lucide-react";

export function TransactionTableOptionsButton() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<div
					className="w-10 h-10 flex items-center justify-center rounded-full
								hover:bg-gray-200 transition-all"
				>
					<MoreVertical size={20} />
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem>View</DropdownMenuItem>
				<DropdownMenuItem>Edit</DropdownMenuItem>
				<DropdownMenuItem>Delete</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
