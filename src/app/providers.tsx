"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { Next13ProgressBar } from "next13-progressbar";

const queryClient = new QueryClient();

export default function Providers({ children }: { children: ReactNode }) {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
		>
			<QueryClientProvider client={queryClient}>
				{children}

				<Next13ProgressBar
					height="3px"
					color="#000"
					options={{ showSpinner: true }}
					showOnShallow
				/>
			</QueryClientProvider>
		</ThemeProvider>
	);
}
