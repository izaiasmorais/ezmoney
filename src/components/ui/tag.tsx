import * as React from "react";
import { Badge } from "./badge";
import { cn } from "@/lib/utils";

interface TagProps extends React.ComponentProps<typeof Badge> {
	color: string;
	children: React.ReactNode;
}

const getColorClasses = (color: string) => {
	const colorMap: Record<string, { light: string; dark: string }> = {
		red: {
			light: "text-red-600 bg-red-50",
			dark: "dark:text-red-300 dark:!bg-red-900/20",
		},
		blue: {
			light: "text-blue-600 bg-blue-50",
			dark: "dark:text-blue-400 dark:!bg-blue-900/20",
		},
		green: {
			light: "text-green-600 bg-green-50",
			dark: "dark:text-green-300 dark:!bg-green-900/20",
		},
		yellow: {
			light: "text-yellow-600 bg-yellow-50",
			dark: "dark:text-yellow-400 dark:!bg-yellow-900/20",
		},
		violet: {
			light: "text-violet-600 bg-violet-50",
			dark: "dark:text-violet-400 dark:!bg-violet-900/20",
		},
		gray: {
			light: "text-gray-600 bg-gray-50",
			dark: "dark:text-gray-400 dark:!bg-gray-900/20",
		},
		sidebar: {
			light: "text-muted-foreground bg-slate-50",
			dark: "dark:text-muted-foreground dark:bg-sidebar",
		},
	};

	return colorMap[color] || { light: "", dark: "" };
};

export function Tag({ children, color, className, ...props }: TagProps) {
	const colorClasses = getColorClasses(color);

	return (
		<Badge
			className={cn(
				"font-semibold shadow-none rounded-full capitalize px-2",
				colorClasses.light,
				colorClasses.dark,
				className
			)}
			{...props}
		>
			{children}
		</Badge>
	);
}
