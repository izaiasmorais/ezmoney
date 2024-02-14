import {
	Banknote,
	CalendarDays,
	ClipboardCheck,
	CreditCard,
	Home,
	Landmark,
	LineChart,
	Settings,
	Wallet,
} from "lucide-react";
import { SidebarItem } from "./sidebar-item";

interface SidebarProps {
	style: string;
}

export function Sidebar({ style }: SidebarProps) {
	return (
		<aside className={style}>
			<h1 className="text-2xl font-semibold flex items-center gap-2">
				<img
					src="https://i.imgur.com/5IIwlfu.pngpublic/ezmoney.png"
					alt="EZMoney Logo"
					className="w-7 h-7"
				/>
				EZMoney
			</h1>
			<div className="mt-12 flex flex-col gap-1">
				<span className="text-sm font-semibold mb-1">GERAL</span>
				<SidebarItem title="Dashboard" href="/" icon={<Home size={20} />} />
				<SidebarItem
					title="Contas"
					href="/invoices"
					icon={<CreditCard size={20} />}
				/>
				<SidebarItem
					title="Transferências"
					href="/transactions"
					icon={<Banknote size={20} />}
					disabled
				/>
				<SidebarItem
					title="Orçamento"
					href="/budget"
					icon={<Wallet size={20} />}
					disabled
				/>
				<SidebarItem
					title="Banco"
					href="/banking"
					icon={<Landmark size={20} />}
					disabled
				/>
			</div>

			<div className="mt-6 flex flex-col gap-1">
				<span className="text-sm font-semibold mb-1">GERENCIAMENTO</span>
				<SidebarItem
					title="Tarefas"
					href="/tasks"
					icon={<ClipboardCheck size={20} />}
					disabled
				/>
				<SidebarItem
					title="Calendário"
					href="/calendar"
					icon={<CalendarDays size={20} />}
					disabled
				/>
				<SidebarItem
					title="Investimentos"
					href="/investiments"
					icon={<LineChart size={20} />}
					disabled
				/>
				<SidebarItem
					title="Configurações"
					href="/settings"
					icon={<Settings size={20} />}
					disabled
				/>
			</div>
		</aside>
	);
}
