"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface SidebarItemProps {
	href: string;
	title: string;
	icon: ReactNode;
	disabled?: boolean;
}

export function SidebarItem({
	href,
	icon,
	title,
	disabled = false,
}: SidebarItemProps) {
	const pathname = usePathname();

	const style = pathname.endsWith(href) ? "bg-slate-100 dark:bg-slate-800" : "";

	return (
		<Link
			href={!disabled ? href : ""}
			className={`px-4 py-2 rounded-md font-medium hover:bg-slate-50
			dark:hover:bg-slate-700 flex justify-between items-center
			 ${style} ${disabled && "cursor-not-allowed"}`}
		>
			<div className="flex gap-2 items-center">
				{icon}
				{title}
			</div>

			{disabled && (
				<div className="bg-slate-100 text-slate-500 py-1 px-2 rounded-md text-xs">
					Em breve
				</div>
			)}
		</Link>
	);
}
