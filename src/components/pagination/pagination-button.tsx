import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { Button } from "../ui/button";

interface PaginationButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: ReactNode;
}

export function PaginationButton({ children, ...rest }: PaginationButtonProps) {
	return (
		<Button
			className="w-10 h-10 p-0 disabled:bg-black disabled:opacity-100 disabled:text-white
			dark:disabled:bg-slate-100 dark:disabled:text-black"
			variant="secondary"
			{...rest}
		>
			{children}
		</Button>
	);
}
