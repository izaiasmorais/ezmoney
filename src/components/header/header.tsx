import { Input } from "../ui/input";
import { ThemeSwitcher } from "./theme-switcher";
import { Notifications } from "./notifications";
import { Menu } from "./menu";
import { Button } from "../ui/button";
import { AlignJustify, Search } from "lucide-react";
import { SearchInput } from "../global/search-input";

export function Header() {
	return (
		<header className="flex w-full justify-between py-3 px-6 border-b">
			<Button variant="outline" className="block md:hidden">
				<AlignJustify size={20} />
			</Button>

			<SearchInput
				placeholder="Search anything..."
				className="hidden md:flex"
			/>

			<div className="flex gap-2">
				<Notifications />
				<ThemeSwitcher />
				<Menu />
			</div>
		</header>
	);
}
