import { Header } from "@/components/header/header";
import { Sidebar } from "@/components/sidebar/sidebar";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "ezmoney",
	description: "Best dashboard for your business out there",
};

export default function NotFound() {
	return (
		<div className={`lg:grid lg:grid-cols-app min-h-screen ${inter.className}`}>
			<head>
				<link rel="icon" href="/ezmoney.png" sizes="any" />
				<title>404 - Page not found</title>
			</head>
			<Sidebar />

			<main className="lg:col-start-2 max-w-[100vw] flex flex-col h-screen">
				<Header />

				<div className="flex-grow overflow-y-auto gap-4 p-6">
					<div className="h-full w-full flex flex-col gap-6 items-center justify-center">
						<span className="text-8xl font-extrabold">404</span>
						<h1 className="text-3xl font-bold">Page not found</h1>
						<Button variant="default" asChild>
							<Link href="/">Go to main page</Link>
						</Button>
					</div>
				</div>
			</main>
		</div>
	);
}
