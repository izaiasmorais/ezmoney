import { Header } from "@/components/header/header";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
	return (
		<SidebarProvider>
			<AppSidebar />

			<SidebarInset>
				<Header />

				<div className="p-4 flex-1">{children}</div>
			</SidebarInset>
		</SidebarProvider>
	);
}
