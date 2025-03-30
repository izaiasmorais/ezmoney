import { create } from "zustand";

interface User {
	name: string;
	email: string;
	avatar: string;
}

interface UserStore {
	user: User;
	setUser: (name: string, email: string, avatar: string) => void;
}

export const useUser = create<UserStore>((set) => ({
	user: {
		name: "",
		email: "",
		avatar: "",
	},

	setUser: (name: string, email: string, avatar: string) =>
		set({
			user: {
				name,
				email,
				avatar,
			},
		}),
}));
