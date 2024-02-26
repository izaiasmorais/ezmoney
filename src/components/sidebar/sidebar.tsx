"use client";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Image from "next/image";
import { SidebarContent } from "./sidebar-content";

export function Sidebar() {
	return (
		<Collapsible
			className="border-b data-[state=open]:bottom-0 lg:data-[state=closed]:bottom-0 left-0 top-0
			right-0 flex flex-col p-4 fixed z-20 lg:right-auto lg:w-80 lg:border-r
			data-[state=open]:h-screen lg:data-[state=open]:h-screen lg:h-auto bg-white dark:bg-zinc-950"
		>
			<div className="flex items-center justify-between ">
				<h1 className="text-2xl font-semibold flex items-center gap-2">
					<Image src="/ezmoney.png" alt="EZMoney Logo" width={36} height={36} />
					EZMoney
				</h1>

				<CollapsibleTrigger asChild className="lg:hidden">
					<Button variant="ghost">
						<Menu className="w-6 h-6 text-zinc-500" />
					</Button>
				</CollapsibleTrigger>
			</div>

			<CollapsibleContent
				asChild
				forceMount
				className="data-[state=closed]:hidden data-[state=closed]:animate-slideUpAndFade
				data-[state=open]:animate-slideDownAndFade lg:data-[state=closed]:flex"
			>
				<div className="flex flex-1 flex-col">
					<SidebarContent />
				</div>
			</CollapsibleContent>
		</Collapsible>
	);
}
