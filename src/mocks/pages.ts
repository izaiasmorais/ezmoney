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

export const pages = [
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
