"use client";
import {
	Calendar,
	CreditCard,
	LayoutDashboard,
	ReceiptText,
	Settings,
	Tag,
	Users,
	Wallet,
} from "lucide-react";
import { NavbarItem } from "./navbar-item";

const navigationItems = [
	{
		href: "/",
		icon: LayoutDashboard,
		label: "Dashboard",
	},
	{
		href: "/contas",
		icon: ReceiptText,
		label: "Contas",
	},
	{
		href: "/transacoes",
		icon: CreditCard,
		label: "Transações",
	},
	{
		href: "/categorias",
		icon: Tag,
		label: "Categorias",
	},
	{
		href: "/orcamentos",
		icon: Wallet,
		label: "Orçamentos",
	},
	{
		href: "/calendario",
		icon: Calendar,
		label: "Calendário",
	},
	{
		href: "/clientes",
		icon: Users,
		label: "Clientes",
	},

	{
		href: "/configuracoes",
		icon: Settings,
		label: "Configurações",
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
