"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface SidebarItemProps {
	href: string;
	title: string;
	icon: ReactNode;
}

export function SidebarItem({ href, icon, title }: SidebarItemProps) {
	const pathname = usePathname();

	const style = pathname.endsWith(href) ? "bg-slate-100 dark:bg-slate-800" : "";

	return (
		<Link
			href={href}
			className={`px-4 py-2 rounded-md font-medium hover:bg-slate-50
			dark:hover:bg-slate-700 flex gap-2 items-center ${style}`}
		>
			{icon}
			{title}
		</Link>
	);
}
