import Cookies from "js-cookie";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface AuthState {
	accessToken: string | null;
	isAuthenticated: boolean;
	authenticate: (token: string) => void;
	logout: () => void;
}

export const useAuthStore = create<AuthState>()(
	persist(
		(set) => ({
			accessToken: null,
			isAuthenticated: false,
			authenticate: (token: string) => {
				set({
					accessToken: token,
					isAuthenticated: true,
				});
			},
			logout: () => {
				set({
					accessToken: null,
					isAuthenticated: false,
				});
			},
		}),
		{
			name: "ezmoney:access_token",
			storage: createJSONStorage(() => ({
				getItem: (key) => {
					const value = Cookies.get(key);
					return value ? JSON.parse(value) : null;
				},
				setItem: (key, value) => {
					Cookies.set(key, JSON.stringify(value), {
						expires: 1,
						secure: process.env.NODE_ENV === "production",
						sameSite: "strict",
					});
				},
				removeItem: (key) => {
					Cookies.remove(key);
				},
			})),
		}
	)
);
