"use client";
import { ChevronRight, type LucideIcon } from "lucide-react";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function NavMain({
	items,
}: {
	items: {
		title: string;
		url: string;
		icon?: LucideIcon;
		isActive?: boolean;
		isPage?: boolean;
		items?: {
			title: string;
			url: string;
			icon?: LucideIcon;
		}[];
	}[];
}) {
	const pathname = usePathname();

	function isActive(url: string) {
		return pathname.endsWith(url)
			? "dark:!bg-violet-800/10 active:!bg-violet-50 !text-violet-600 dark:!text-violet-400 hover:text-ingido-600/80 dark:text-violet-600 bg-violet-50 hover:bg-violet-50 dark:bg-violet-50/50"
			: "text-muted-foreground";
	}

	function isDefaultOpen(title: string) {
		if (pathname.includes(title.toLowerCase())) {
			return true;
		}
	}

	return (
		<SidebarGroup>
			<SidebarGroupLabel>GERAL</SidebarGroupLabel>

			<SidebarMenu>
				{items.map((item) => {
					if (item.isPage) {
						return (
							<SidebarMenuItem key={item.title}>
								<SidebarMenuButton
									asChild
									tooltip={item.title}
									className={`${isActive(item.url)}`}
								>
									<Link href={item.url}>
										{item.icon && <item.icon strokeWidth={1.75} />}

										<span>{item.title}</span>
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
						);
					}

					return (
						<Collapsible
							key={item.title}
							asChild
							defaultOpen={isDefaultOpen(item.title)}
							className="group/collapsible"
						>
							<SidebarMenuItem>
								<CollapsibleTrigger asChild>
									<SidebarMenuButton tooltip={item.title}>
										{item.icon && <item.icon strokeWidth={1.75} />}

										<span>{item.title}</span>

										{!item.isPage && (
											<ChevronRight
												className="ml-auto transition-transform duration-200
										group-data-[state=open]/collapsible:rotate-90"
											/>
										)}
									</SidebarMenuButton>
								</CollapsibleTrigger>

								<CollapsibleContent>
									<SidebarMenuSub>
										{item.items?.map((subItem) => (
											<SidebarMenuSubItem key={subItem.title}>
												<SidebarMenuSubButton
													asChild
													className={`${isActive(subItem.url)}`}
												>
													<Link href={subItem.url}>
														{subItem.icon && (
															<subItem.icon
																strokeWidth={1.75}
																className={`${
																	pathname.includes(subItem.url) &&
																	"!text-minimal-purple"
																}`}
															/>
														)}

														<span>{subItem.title}</span>
													</Link>
												</SidebarMenuSubButton>
											</SidebarMenuSubItem>
										))}
									</SidebarMenuSub>
								</CollapsibleContent>
							</SidebarMenuItem>
						</Collapsible>
					);
				})}
			</SidebarMenu>
		</SidebarGroup>
	);
}
