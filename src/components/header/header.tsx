"use client";
import {
	Breadcrumb,
	BreadcrumbList,
	BreadcrumbItem,
	BreadcrumbPage,
	BreadcrumbLink,
	BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { usePathname } from "next/navigation";
import { SidebarTrigger } from "../ui/sidebar";
import { Separator } from "../ui/separator";
import { ThemeSwitcher } from "./theme-switcher";

export function Header() {
	const pathname = usePathname();
	const pathSegments = pathname.split("/").filter(Boolean);

	return (
		<header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
			<div className="flex items-center gap-2 px-4 w-full">
				<SidebarTrigger className="-ml-1" />

				<Separator orientation="vertical" className="mr-2 h-4" />

				<Breadcrumb>
					<BreadcrumbList>
						{pathname.endsWith("/") && (
							<BreadcrumbItem>
								<BreadcrumbPage>
									<span className="capitalize">Dashboard</span>
								</BreadcrumbPage>
							</BreadcrumbItem>
						)}

						{pathSegments.map((segment, index) => {
							if (index === pathSegments.length - 1) {
								return (
									<BreadcrumbItem key={segment}>
										<BreadcrumbLink href={`${pathname}`}>
											<span className="capitalize">{segment}</span>
										</BreadcrumbLink>
									</BreadcrumbItem>
								);
							}

							if (index !== pathSegments.length - 1)
								return (
									<div key={segment} className="flex items-center gap-4">
										<BreadcrumbItem>
											<BreadcrumbLink href={`/${segment}`}>
												<span className="capitalize">{segment}</span>
											</BreadcrumbLink>
										</BreadcrumbItem>

										<BreadcrumbSeparator
											className="hidden md:block"
											key={segment}
										/>
									</div>
								);
						})}
					</BreadcrumbList>
				</Breadcrumb>

				<ThemeSwitcher />
			</div>
		</header>
	);
}
