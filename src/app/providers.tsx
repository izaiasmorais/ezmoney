"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { Next13ProgressBar } from "next13-progressbar";
import type { ReactNode } from "react";
import { Toaster } from "sonner";
import { queryClient } from "../lib/react-query";

export default function Providers({ children }: { children: ReactNode }) {
	return (
		<>
			<ThemeProvider
				attribute="class"
				defaultTheme="system"
				enableSystem
				disableTransitionOnChange
			>
				<QueryClientProvider client={queryClient}>
					{children}
				</QueryClientProvider>
			</ThemeProvider>

			<Next13ProgressBar
				height="4px"
				color="#17181D"
				showOnShallow
				options={{ showSpinner: false }}
			/>

			<Toaster richColors />
		</>
	);
}
