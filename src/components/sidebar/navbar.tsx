"use client";
import {
	FileText,
	FolderOpen,
	HelpCircle,
	LayoutDashboard,
	MessageSquare,
} from "lucide-react";
import { NavbarItem } from "./navbar-item";

const navigationItems = [
	{
		href: "/",
		icon: LayoutDashboard,
		label: "Dashboard",
	},
	{
		href: "/transcricao",
		icon: FileText,
		label: "Transcrição",
	},
	{
		href: "/chat-bot",
		icon: MessageSquare,
		label: "Chat Bot",
	},
	{
		href: "/documentos",
		icon: FolderOpen,
		label: "Documentos",
	},
	{
		href: "/ajuda-suporte",
		icon: HelpCircle,
		label: "Ajuda e Suporte",
	},
];

export function Navbar() {
	return (
		<nav className="flex flex-col gap-1">
			{navigationItems.map((item) => (
				<NavbarItem
					key={item.href}
					href={item.href}
					icon={item.icon}
					label={item.label}
				/>
			))}
		</nav>
	);
}
