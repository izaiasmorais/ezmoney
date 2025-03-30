"use client";
import { getSession } from "@/api/session/get-session";
import { NavUser } from "./nav-user";
import { NavUserSkeleton } from "./nav-user-skeleton";
import { useQuery } from "@tanstack/react-query";

export function NavUserClient() {
	const { data, isLoading: isLoadingGetSession } = useQuery({
		queryKey: ["get-session"],
		queryFn: getSession,
	});

	if (isLoadingGetSession) return <NavUserSkeleton />;

	return (
		<NavUser
			user={{
				name: data?.user.name ?? "",
				email: data?.user.email ?? "",
				avatar: data?.user.image ?? "",
			}}
		/>
	);
}
