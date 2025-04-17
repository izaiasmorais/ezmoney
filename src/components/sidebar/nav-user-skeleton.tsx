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
					<Skeleton className="h-8 w-8 rounded-lg bg-slate-200" />

					<div className="grid flex-1 gap-1 text-left">
						<Skeleton className="h-4 w-24 bg-slate-200" />
						<Skeleton className="h-3 w-32 bg-slate-200" />
					</div>

					<ChevronsUpDown className="ml-auto size-4 opacity-50" />
				</SidebarMenuButton>
			</SidebarMenuItem>
		</SidebarMenu>
	);
}
