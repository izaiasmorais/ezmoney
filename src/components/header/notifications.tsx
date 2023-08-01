"use client";
import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarSeparator,
	MenubarTrigger,
} from "@/components/ui/menubar";
import { Bell, CheckCheck } from "lucide-react";
import { Notification } from "./notification";

export function Notifications() {
	return (
		<Menubar className="p-0 m-0">
			<MenubarMenu>
				<MenubarTrigger className="m-0 py-2 px-[10px] cursor-pointer">
					<Bell size={20} />
				</MenubarTrigger>

				<MenubarContent className="mr-4">
					<MenubarItem className="flex justify-between items-center mb-2">
						<span className="text-lg font-semibold">Your notifications</span>
						<span className="text-sm text-blue-500 font-medium flex gap-1 items-center">
							<CheckCheck size={16} /> Mark all as read
						</span>
					</MenubarItem>
					<MenubarItem>
						<Notification />
					</MenubarItem>
					<MenubarSeparator />
					<MenubarItem>
						<Notification />
					</MenubarItem>
					<MenubarSeparator />
					<MenubarItem>
						<Notification />
					</MenubarItem>
					<MenubarSeparator />
					<MenubarItem>
						<Notification />
					</MenubarItem>
					<MenubarSeparator />
					<MenubarItem>
						<Notification />
					</MenubarItem>
					<MenubarSeparator />
				</MenubarContent>
			</MenubarMenu>
		</Menubar>
	);
}
