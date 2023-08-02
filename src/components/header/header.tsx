import { Input } from "../ui/input";
import { ThemeSwitcher } from "./theme-switcher";
import { Notifications } from "./notifications";
import { Menu } from "./menu";
import { Button } from "../ui/button";
import { AlignJustify, Search } from "lucide-react";

export function Header() {
	return (
		<header className="flex w-full justify-between py-3 px-6 border-b">
			<div className="flex items-center gap-2">
				<Button variant="outline" className="block md:hidden">
					<AlignJustify size={20} />
				</Button>

				<div
					className="hidden md:flex w-[400px] flex-1 px-2 items-center
				gap-0 border rounded-md overflow-hidden"
				>
					<Search size={20} className="text-zinc-500" />
					<Input
						placeholder="Search anything..."
						className="!flex-1 !rounded-none !border-none !ring-0"
					/>
				</div>
			</div>
			<div className="flex gap-2">
				<Notifications />
				<ThemeSwitcher />
				<Menu />
			</div>
		</header>
	);
}
