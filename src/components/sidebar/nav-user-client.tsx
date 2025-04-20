"use client";
import { getSession } from "@/api/session/get-session";
import { useQuery } from "@tanstack/react-query";
import { NavUser } from "./nav-user";
import { NavUserSkeleton } from "./nav-user-skeleton";

export function NavUserClient() {
	const { data, isLoading: isLoadingGetSession } = useQuery({
		queryKey: ["get-session"],
		queryFn: getSession,
	});

	if (isLoadingGetSession) {
		return <NavUserSkeleton />;
	}

	return (
		<div>
			<NavUser
				user={{
					name: data?.user.name ?? "",
					email: data?.user.email ?? "",
					avatar: data?.user.image ?? "",
				}}
			/>
		</div>
	);
}
