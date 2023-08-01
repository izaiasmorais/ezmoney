import {
	HeartHandshake,
	Home,
	PackageSearch,
	Sandwich,
	ScrollText,
	ShoppingCart,
	Users,
	Wallet,
} from "lucide-react";
import { SidebarItem } from "./sidebar-item";

export function Sidebar() {
	return (
		<aside className="h-screen w-[300px] border-r p-4 hidden md:block">
			<h1 className="text-2xl font-semibold flex items-center gap-2">
				<Sandwich />
				ezmoney
			</h1>
			<div className="mt-12 flex flex-col gap-1">
				<span className="text-sm font-semibold mb-1">GENERAL</span>
				<SidebarItem title="Dashboard" href="/" icon={<Home size={20} />} />
				<SidebarItem title="Sales" href="/sales" icon={<Wallet size={20} />} />
				<SidebarItem
					title="Clients"
					href="/clients"
					icon={<Users size={20} />}
				/>
				<SidebarItem
					title="Products"
					href="/products"
					icon={<PackageSearch size={20} />}
				/>
				<SidebarItem
					title="Online Store"
					href="/online-store"
					icon={<ShoppingCart size={20} />}
				/>
			</div>

			<div className="mt-6 flex flex-col gap-1">
				<span className="text-sm font-semibold mb-1">BOOST</span>
				<SidebarItem
					title="Coupons"
					href="/coupons"
					icon={<ScrollText size={20} />}
				/>
				<SidebarItem
					title="Loyalty"
					href="/loyalty"
					icon={<HeartHandshake size={20} />}
				/>
			</div>
		</aside>
	);
}
