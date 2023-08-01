import { Input } from "../ui/input";
import { ThemeSwitcher } from "./theme-switcher";
import { Notifications } from "./notifications";
import { Menu } from "./menu";
import { Button } from "../ui/button";
import { AlignJustify } from "lucide-react";

export function Header() {
	return (
		<header className="flex w-full justify-between py-3 px-6 border-b">
			<div className="flex items-center gap-2">
				<Button variant="outline" className="block md:hidden">
					<AlignJustify size={20} />
				</Button>
				<Input placeholder="Search anything..." className="max-w-[300px]" />
			</div>
			<div className="flex gap-2">
				<Notifications />
				<ThemeSwitcher />
				<Menu />
			</div>
		</header>
	);
}
