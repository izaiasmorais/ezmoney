"use client";
import {
	Menubar,
	MenubarContent,
	MenubarMenu,
	MenubarTrigger,
} from "@/components/ui/menubar";
import { Bell } from "lucide-react";

export function Notifications() {
	return (
		<Menubar className="p-0 m-0">
			<MenubarMenu>
				<MenubarTrigger className="m-0 py-2 px-[10px] cursor-pointer">
					<Bell size={20} />
				</MenubarTrigger>

				<MenubarContent className="mr-4"></MenubarContent>
			</MenubarMenu>
		</Menubar>
	);
}
