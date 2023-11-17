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
				<span className="text-sm font-semibold text-slate-500 mb-1">
					GENERAL
				</span>
				<SidebarItem title="Dashboard" href="/" icon={<Home size={20} />} />
				<SidebarItem
					title="Transactions"
					href="/transactions"
					icon={<Banknote size={20} />}
				/>
				<SidebarItem
					title="Invoices"
					href="/invoices"
					icon={<CreditCard size={20} />}
				/>
				<SidebarItem
					title="Budget"
					href="/budget"
					icon={<Wallet size={20} />}
					disabled
				/>
				<SidebarItem
					title="Banking"
					href="/banking"
					icon={<Landmark size={20} />}
					disabled
				/>
			</div>

			<div className="mt-6 flex flex-col gap-1">
				<span className="text-sm font-semibold text-slate-500 mb-1">
					MANAGEMENT
				</span>
				<SidebarItem
					title="Tasks"
					href="/tasks"
					icon={<ClipboardCheck size={20} />}
					disabled
				/>
				<SidebarItem
					title="Calendar"
					href="/calendar"
					icon={<CalendarDays size={20} />}
					disabled
				/>
				<SidebarItem
					title="Investiments"
					href="/investiments"
					icon={<LineChart size={20} />}
					disabled
				/>
				<SidebarItem
					title="Settings"
					href="/settings"
					icon={<Settings size={20} />}
					disabled
				/>
			</div>
		</aside>
	);
}
