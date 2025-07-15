"use client";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavbarItemProps {
	href: string;
	icon: LucideIcon;
	label: string;
}

export function NavbarItem({ href, icon: Icon, label }: NavbarItemProps) {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link
			href={href}
			className={cn(
				"flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-colors",
				"hover:text-primary",
				isActive ? "text-primary" : "text-zinc-500"
			)}
		>
			<Icon className="h-5 w-5" />
			<span>{label}</span>
		</Link>
	);
}
