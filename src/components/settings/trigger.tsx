import type { ReactNode } from "react";
import { TabsTrigger } from "@/components/ui/tabs";

interface SettingsTriggerProps {
	value: string;
	icon: ReactNode;
	children: ReactNode;
}

export function SettingsTrigger({
	value,
	icon,
	children,
}: SettingsTriggerProps) {
	return (
		<TabsTrigger
			value={value}
			className="text-zinc-500 text-sm hover:bg-accent data-[state=active]:after:bg-primary
			data-[state=active]:hover:bg-accent relative after:absolute after:inset-x-0
			after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent
			data-[state=active]:shadow-none cursor-pointer
			transition-all duration-300 ease-in-out
			after:transition-all after:duration-300 after:ease-in-out
			after:transform after:scale-x-0 data-[state=active]:after:scale-x-100
			hover:text-foreground data-[state=active]:text-foreground
			after:origin-center"
		>
			{icon}
			{children}
		</TabsTrigger>
	);
}
