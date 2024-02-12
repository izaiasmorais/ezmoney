import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Eye, MoreVertical, PenSquare, Trash2 } from "lucide-react";

export function OptionsButton() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<div className="w-10 h-10 flex items-center justify-center rounded-full transition-all">
					<MoreVertical size={20} />
				</div>
			</DropdownMenuTrigger>

			<DropdownMenuContent>
				<DropdownMenuItem className="flex items-center gap-2 cursor-pointer text-base">
					<Eye size={16} />
					View
				</DropdownMenuItem>
				<DropdownMenuItem className="flex items-center gap-2 cursor-pointer text-base">
					<PenSquare size={16} />
					Edit
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem className="flex items-center gap-2 text-red-500 !hover:text-red-500 cursor-pointer text-base">
					<Trash2 size={16} />
					Delete
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
