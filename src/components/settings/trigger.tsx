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
			data-[state=active]:shadow-none cursor-pointer"
		>
			{icon}
			{children}
		</TabsTrigger>
	);
}
