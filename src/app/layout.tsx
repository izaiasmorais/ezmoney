import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import Providers from "./providers";
import "./globals.css";

export const metadata: Metadata = {
	title: "EZMoney",
	description: "Organize sua vida financeira com um clique.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="pt-BR"
			className={GeistSans.className}
			suppressHydrationWarning={true}
		>
			<head>
				<link rel="icon" href="/ezmoney.svg" sizes="any" />
			</head>

			<body cz-shortcut-listen="true">
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
