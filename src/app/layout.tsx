import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Providers from "./providers";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "ezmoney",
	description: "Best dashboard for your business out there",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="antialiased" suppressHydrationWarning={true}>
			<head>
				<link rel="icon" href="/ezmoney.png" sizes="any" />
			</head>

			<body className={inter.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
