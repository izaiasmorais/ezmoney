"use client";
import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import { NavUser } from "./nav-user";
import { NavUserSkeleton } from "./nav-user-skeleton";

export function NavUserClient() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [avatarUrl, setAvatarUrl] = useState("");

	async function getUser() {
		const { data: session } = await authClient.getSession();
		return session;
	}

	useEffect(() => {
		getUser().then((data) => {
			setName(data?.user?.name ?? "");
			setEmail(data?.user?.email ?? "");
			setAvatarUrl(data?.user?.image ?? "");
		});
	}, []);

	if (!email) return <NavUserSkeleton />;

	return (
		<NavUser
			user={{
				name: name,
				email: email,
				avatar: avatarUrl ?? "",
			}}
		/>
	);
}
