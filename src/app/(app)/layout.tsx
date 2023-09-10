import { Header } from "@/components/header/header";
import { Sidebar } from "@/components/sidebar/sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex h-screen">
			<Sidebar style="flex-none w-[300px] border-r p-4 md:p-6 hidden md:block " />

			<main className="flex flex-grow flex-col">
				<div>
					<Header />
				</div>

				<div className="flex-grow overflow-y-auto p-4 md:p-6 gap-4 md:gap-6">
					{children}
				</div>
			</main>
		</div>
	);
}
