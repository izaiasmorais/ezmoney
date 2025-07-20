import { GeistMono } from "geist/font/mono";
import { SearchInput } from "../ui/search-input";
import { Menu } from "./menu";
import { Navbar } from "./navbar";

export function Sidebar() {
	return (
		<aside className="h-full flex flex-col gap-6 p-4 border-r border-border">
			<div className="flex items-center gap-2">
				<span className={GeistMono.className}>EZMoney</span>
			</div>

			<SearchInput placeholder="Pesquisar..." />

			<Navbar />

			<div className="mt-auto">
				<div className="flex items-center justify-between">
					<Menu />
				</div>
			</div>
		</aside>
	);
}
