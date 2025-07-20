import { Header } from "@/components/header/header";
import { Sidebar } from "@/components/sidebar/sidebar";

export default function AppLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="fixed inset-0 w-screen h-screen dark:bg-[#111111] flex">
			<aside className="w-[272px] h-full">
				<Sidebar />
			</aside>

			<main className="flex-1 flex flex-col h-full overflow-hidden">
				<Header />

				<div className="w-full flex-1 py-1 px-6 flex overflow-auto">{children}</div>
			</main>
		</div>
	);
}
