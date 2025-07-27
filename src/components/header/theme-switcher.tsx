"use client";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "../ui/skeleton";

export function ThemeSwitcher() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const cycleTheme = () => {
		if (theme === "light") setTheme("dark");
		else if (theme === "dark") setTheme("system");
		else setTheme("light");
	};

	if (!mounted) {
		return <Skeleton className="w-8 h-8 ml-auto" />;
	}

	return (
		<Button
			variant="outline"
			size="icon"
			onClick={cycleTheme}
			aria-label="Toggle theme"
		>
			{theme === "light" ? (
				<Sun size={20} />
			) : theme === "dark" ? (
				<Moon size={20} />
			) : (
				<Monitor size={20} />
			)}
		</Button>
	);
}
