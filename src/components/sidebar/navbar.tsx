"use client";

import { pages } from "@/mocks/pages";
import { NavbarItem } from "./navbar-item";

export function Navbar() {
	return (
		<nav className="flex flex-col gap-1">
			{pages.map((item) => (
				<NavbarItem
					key={item.href}
					href={item.href}
					icon={item.icon}
					label={item.label}
				/>
			))}
		</nav>
	);
}
