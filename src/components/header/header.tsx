"use client";
import { Bell } from "lucide-react";
import { usePathname } from "next/navigation";
import { pages } from "@/mocks/pages";
import { Button } from "../ui/button";
import { ThemeSwitcher } from "./theme-switcher";

export function Header() {
	const pathname = usePathname();

	const currentPage = pages.find((page) => page.href === pathname);

	const pageTitle = currentPage?.label || "Dashboard";

	return (
		<header className="w-full p-6 flex items-center justify-between gap-6">
			<h1 className="text-xl font-medium">{pageTitle}</h1>

			<div className="flex items-center gap-4 ml-auto">
				<ThemeSwitcher />

				<Button variant="outline" size="icon">
					<Bell />
				</Button>
			</div>
		</header>
	);
}
