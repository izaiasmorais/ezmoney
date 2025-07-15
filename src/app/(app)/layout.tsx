import { Header } from "@/components/header/header";
import { Sidebar } from "@/components/sidebar/sidebar";

export default function AppLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="w-full grid grid-cols-[272px_1fr] h-screen bg-[#111111]">
			<Sidebar />

			<main className="w-full h-full flex flex-col gap-0">
				<Header />

				<div className="w-full flex-1 p-6">{children}</div>
			</main>
		</div>
	);
}
