"use client";
import * as React from "react";
import { NavMain } from "@/components/sidebar/nav-main";
import { TeamSwitcher } from "@/components/sidebar/team-switcher";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarRail,
} from "@/components/ui/sidebar";
import { sidebarData } from "@/mocks/sidebar";
import { NavUserClient } from "./nav-user-client";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar collapsible="icon" {...props}>
			<SidebarHeader>
				<TeamSwitcher teams={sidebarData.teams} />
			</SidebarHeader>

			<SidebarContent>
				<NavMain items={sidebarData.navMain} />
			</SidebarContent>

			<SidebarFooter>
				<NavUserClient />
			</SidebarFooter>

			<SidebarRail />
		</Sidebar>
	);
}
