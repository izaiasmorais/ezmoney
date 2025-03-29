import * as React from "react";
import { NavMain } from "@/components/nav-main";
import { TeamSwitcher } from "@/components/team-switcher";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarRail,
} from "@/components/ui/sidebar";
import { sidebarData } from "@/mocks/sidebar";
import { authClient } from "@/lib/auth-client";
import { NavUserSkeleton } from "./nav-user-skeleton";
import { NavUser } from "./nav-user";

const UserProfile = () => {
	const { data: session, isPending } = authClient.useSession();

	if (isPending || !session || !session.user) {
		throw new Promise((resolve) => setTimeout(resolve, 10));
	}

	return (
		<NavUser
			user={{
				name: session.user.name,
				email: session.user.email,
				avatar: session.user.image ?? "",
			}}
		/>
	);
};

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
				<React.Suspense fallback={<NavUserSkeleton />}>
					<UserProfile />
				</React.Suspense>
			</SidebarFooter>

			<SidebarRail />
		</Sidebar>
	);
}
