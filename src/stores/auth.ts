import Cookies from "js-cookie";
import { create } from "zustand";

interface AuthState {
	accessToken: string | null;
	isAuthenticated: boolean;
	authenticate: (token: string) => void;
	logout: () => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
	accessToken: null,
	isAuthenticated: false,
	authenticate: (token: string) => {
		// Store token in cookie
		Cookies.set("ezmoney-access-token", token, {
			expires: 1,
			secure: process.env.NODE_ENV === "production",
			sameSite: "strict",
		});

		set({
			accessToken: token,
			isAuthenticated: true,
		});
	},
	logout: () => {
		// Remove token from cookie
		Cookies.remove("ezmoney-access-token");

		set({
			accessToken: null,
			isAuthenticated: false,
		});
	},
}));
