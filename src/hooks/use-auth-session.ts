"use client";
import { useQuery } from "@tanstack/react-query";
import { authClient } from "@/lib/auth-client";

export function useAuthSession() {
	return useQuery({
		queryKey: ["auth-session"],
		queryFn: async () => {
			const { data: session, error } = await authClient.getSession();

			if (error) {
				throw new Error(error.message);
			}

			return session;
		},
	});
}
