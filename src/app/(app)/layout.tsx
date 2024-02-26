import { Header } from "@/components/header/header";
import { Sidebar } from "@/components/sidebar/sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="xl:grid xl:grid-cols-app min-h-screen">
			<Sidebar />

			<main className="xl:col-start-2 max-w-[100vw] flex flex-col h-screen">
				<Header />

				<div className="p-4 flex-grow overflow-auto">{children}</div>
			</main>
		</div>
	);
}
