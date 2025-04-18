"use client";
import { Monitor, Moon, Sun } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";

export function ThemeSwitcher() {
	const { setTheme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger
				className="border w-10 h-10 flex items-center justify-center rounded-md
			cursor-pointer"
			>
				<Sun size={20} />
			</DropdownMenuTrigger>

			<DropdownMenuContent>
				<DropdownMenuItem
					className="flex items-center gap-2 cursor-pointer"
					onClick={() => setTheme("light")}
				>
					<Sun size={20} />
					Claro
				</DropdownMenuItem>

				<DropdownMenuItem
					className="flex items-center gap-2 cursor-pointer"
					onClick={() => setTheme("dark")}
				>
					<Moon size={20} />
					Escuro
				</DropdownMenuItem>

				<DropdownMenuItem
					className="flex items-center gap-2 cursor-pointer"
					onClick={() => setTheme("system")}
				>
					<Monitor size={20} />
					Sistema
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
