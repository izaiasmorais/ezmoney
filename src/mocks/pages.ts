import {
	Calendar,
	CreditCard,
	Landmark,
	LayoutDashboard,
	PiggyBank,
	ReceiptText,
	Settings,
	Tag,
	Users,
} from "lucide-react";

export const pages = [
	{
		href: "/",
		icon: LayoutDashboard,
		label: "Dashboard",
	},
	{
		href: "/faturas",
		icon: ReceiptText,
		label: "Faturas",
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
		href: "/contas",
		icon: Landmark,
		label: "Contas",
	},
	{
		href: "/orcamentos",
		icon: PiggyBank,
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
