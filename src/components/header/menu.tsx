"use client";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	Cloud,
	CreditCard,
	Github,
	LifeBuoy,
	LogOut,
	Settings,
	User,
} from "lucide-react";
import { Avatar } from "../dashboard/avatar";
import { Button } from "../ui/button";

export function Menu() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button className="p-0 rounded-full bg-transparent cursor-pointer">
					<Avatar src="https://i.imgur.com/t8gWyAZ.jpg" fall="IZ" />
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent className="w-56 mr-4">
				<DropdownMenuLabel>Izaías Lima</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem className="cursor-pointer">
						<User className="mr-2 h-4 w-4" />
						<span>Profile</span>
					</DropdownMenuItem>
					<DropdownMenuItem disabled>
						<CreditCard className="mr-2 h-4 w-4" />
						<span>Billing</span>
					</DropdownMenuItem>
					<DropdownMenuItem className="cursor-pointer">
						<Settings className="mr-2 h-4 w-4" />
						<span>Settings</span>
					</DropdownMenuItem>
				</DropdownMenuGroup>

				<DropdownMenuSeparator />

				<DropdownMenuItem className="cursor-pointer">
					<a
						href="https://github.com/izaiasmorais"
						className="flex items-center"
					>
						<Github className="mr-2 h-4 w-4" />
						<span>GitHub</span>
					</a>
				</DropdownMenuItem>
				<DropdownMenuItem className="cursor-pointer">
					<LifeBuoy className="mr-2 h-4 w-4" />
					<span>Support</span>
				</DropdownMenuItem>
				<DropdownMenuItem disabled>
					<Cloud className="mr-2 h-4 w-4" />
					<span>API</span>
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem className="cursor-pointer">
					<LogOut className="mr-2 h-4 w-4" />
					<span>Log out</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
