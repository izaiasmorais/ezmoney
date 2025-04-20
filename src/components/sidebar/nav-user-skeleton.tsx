"use client";
import { ChevronsUpDown } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import {
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavUserSkeleton() {
	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<SidebarMenuButton size="lg" className="pointer-events-none">
					<Skeleton className="h-8 w-8 rounded-lg !bg-sidebar-accent" />

					<div className="grid flex-1 gap-1 text-left">
						<Skeleton className="h-4 w-3/5 !bg-sidebar-accent" />
						<Skeleton className="h-4 w-full !bg-sidebar-accent" />
					</div>

					<ChevronsUpDown className="ml-auto size-4 opacity-50" />
				</SidebarMenuButton>
			</SidebarMenuItem>
		</SidebarMenu>
	);
}
