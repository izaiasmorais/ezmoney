import {
	AudioWaveform,
	Banknote,
	LayoutDashboard,
	Receipt,
	Settings,
	Wallet,
} from "lucide-react";

export const sidebarData = {
	user: {
		name: "Izaías Lima",
		email: "izaiaslima356@gmail.com",
		avatar: "Izaías Lima",
	},
	teams: [
		{
			name: "Workspace",
			logo: Wallet,
			plan: "Ativo",
		},
		{
			name: "Doom",
			logo: AudioWaveform,
			plan: "Ativo",
		},
	],
	navMain: [
		{
			title: "Dashboard",
			url: "/",
			icon: LayoutDashboard,
			isActive: false,
			isPage: true,
		},
		{
			title: "Contas",
			url: "/contas",
			icon: Receipt,
			isActive: false,
			isPage: true,
		},
		{
			title: "Transações",
			url: "/transacoes",
			icon: Banknote,
			isActive: false,
			isPage: true,
		},
		{
			title: "Configurações",
			url: "/configuracoes",
			icon: Settings,
			isActive: false,
			isPage: true,
		},
	],
};
