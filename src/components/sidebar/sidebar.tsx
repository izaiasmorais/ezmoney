"use client";
import { SidebarContent } from "./sidebar-content";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Image from "next/image";
import { useState } from "react";

export function Sidebar() {
	const [isOpen, setIsOpen] = useState<"open" | "closed">("closed");

	async function handleToggleCollapsible() {
		setIsOpen((prev) => (prev === "open" ? "closed" : "open"));
	}

	return (
		<Collapsible
			data-state={isOpen}
			className="border-b data-[state=open]:bottom-0 xl:data-[state=closed]:bottom-0 left-0 top-0
			right-0 flex flex-col p-4 fixed z-20 xl:right-auto xl:w-80 xl:border-r gap-6
			data-[state=open]:h-screen xl:data-[state=open]:h-screen xl:h-auto bg-white dark:bg-zinc-950"
		>
			<div className="flex items-center justify-between ">
				<h1 className="text-xl xl:text-2xl font-semibold flex items-center gap-2">
					<Image
						src="/ezmoney.png"
						alt="EZMoney Logo"
						width={36}
						height={36}
						className="w-6 h-6 xl:w-8 xl:h-8"
					/>
					EZMoney
				</h1>

				<CollapsibleTrigger
					asChild
					className="xl:hidden"
					onClick={() => handleToggleCollapsible()}
				>
					<Button variant="ghost">
						<Menu className="w-6 h-6 text-zinc-500" />
					</Button>
				</CollapsibleTrigger>
			</div>

			<CollapsibleContent
				asChild
				forceMount
				data-state={isOpen}
				className="data-[state=closed]:hidden data-[state=closed]:animate-slideUpAndFade
				data-[state=open]:animate-slideDownAndFade xl:data-[state=closed]:flex"
			>
				<div className="flex flex-1 flex-col">
					<div onClick={() => handleToggleCollapsible()}>
						<SidebarContent />
					</div>
				</div>
			</CollapsibleContent>
		</Collapsible>
	);
}
