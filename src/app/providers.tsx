"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import { Next13ProgressBar } from "next13-progressbar";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { queryClient } from "../services/react-query";

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
