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

	const style = pathname.endsWith(href) ? "bg-muted" : "";

	return (
		<Link
			href={!disabled ? href : ""}
			className={`px-4 py-2 rounded-md font-medium flex justify-between items-center
			 ${style} ${disabled && "cursor-not-allowed"} ${!disabled && "hover:bg-muted"}`}
		>
			<div className="flex gap-2 items-center">
				{icon}
				{title}
			</div>

			{disabled && (
				<div className="bg-muted py-1 px-2 rounded-md text-xs">Em breve</div>
			)}
		</Link>
	);
}
