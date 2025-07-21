import Cookies from "js-cookie";
import { create } from "zustand";

interface AuthState {
	accessToken: string | null;
	isAuthenticated: boolean;
	authenticate: (token: string) => void;
	logout: (callback?: () => void) => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
	accessToken: null,
	isAuthenticated: false,
	authenticate: (token: string) => {
		Cookies.set("ezmoney-access-token", token, {
			expires: 1 / 24,
			secure: process.env.NODE_ENV === "production",
			sameSite: "strict",
		});

		set({
			accessToken: token,
			isAuthenticated: true,
		});
	},
	logout: (callback?: () => void) => {
		Cookies.remove("ezmoney-access-token");

		set({
			accessToken: null,
			isAuthenticated: false,
		});

		if (callback) {
			callback();
		}
	},
}));
