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

	const style = pathname.endsWith(href) ? "bg-muted/50" : "";

	return (
		<Link
			href={!disabled ? href : ""}
			className={`px-4 py-2 rounded-md font-medium flex justify-between items-center
			 ${style} ${disabled && "cursor-not-allowed"} ${
				!disabled && "hover:bg-muted/50"
			}`}
		>
			<div className="flex gap-2 items-center font-medium">
				{icon}
				{title}
			</div>

			{disabled && (
				<div className="bg-muted/50 py-1 px-2 rounded-md text-xs">Em breve</div>
			)}
		</Link>
	);
}
