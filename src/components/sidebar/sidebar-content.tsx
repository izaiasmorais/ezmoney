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

export function SidebarContent() {
	return (
		<>
			<div className="flex flex-col gap-1">
				<span className="text-sm font-semibold mb-1">GERAL</span>
				<SidebarItem
					title="Dashboard"
					href="/"
					icon={<Home size={20} strokeWidth={1.5} />}
				/>

				<SidebarItem
					title="Contas"
					href="/invoices"
					icon={<CreditCard size={20} strokeWidth={1.5} />}
				/>
				<SidebarItem
					title="Transferências"
					href="/transactions"
					icon={<Banknote size={20} strokeWidth={1.5} />}
					disabled
				/>
				<SidebarItem
					title="Orçamento"
					href="/budget"
					icon={<Wallet size={20} strokeWidth={1.5} />}
					disabled
				/>
				<SidebarItem
					title="Banco"
					href="/banking"
					icon={<Landmark size={20} strokeWidth={1.5} />}
					disabled
				/>
			</div>

			<div className="mt-6 flex flex-col gap-1">
				<span className="text-sm font-semibold mb-1">GERENCIAMENTO</span>
				<SidebarItem
					title="Tarefas"
					href="/tasks"
					icon={<ClipboardCheck size={20} strokeWidth={1.5} />}
					disabled
				/>
				<SidebarItem
					title="Calendário"
					href="/calendar"
					icon={<CalendarDays size={20} strokeWidth={1.5} />}
					disabled
				/>
				<SidebarItem
					title="Investimentos"
					href="/investiments"
					icon={<LineChart size={20} strokeWidth={1.5} />}
					disabled
				/>
				<SidebarItem
					title="Configurações"
					href="/settings"
					icon={<Settings size={20} strokeWidth={1.5} />}
					disabled
				/>
			</div>
		</>
	);
}
