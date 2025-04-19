import { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
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
			lang="pt-br"
			className={GeistSans.className}
			suppressHydrationWarning={true}
		>
			<head>
				<link rel="icon" href="/ezmoney.svg" sizes="any" />
			</head>

			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
