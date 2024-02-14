import { ThemeSwitcher } from "./theme-switcher";
import { Notifications } from "./notifications";
import { SearchInput } from "../global/search-input";
import { AlignJustify } from "lucide-react";
import { Button } from "../ui/button";
import { Menu } from "./menu";

export function Header() {
	return (
		<header className="flex w-full justify-between p-4 md:p-6 border-b">
			<Button variant="outline" className="block md:hidden">
				<AlignJustify size={20} />
			</Button>

			<SearchInput
				placeholder="Buscar..."
				className="hidden md:flex"
			/>

			<div className="flex gap-2">
				{/* <Notifications /> */}
				<ThemeSwitcher />
				<Menu />
			</div>
		</header>
	);
}
