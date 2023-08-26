import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface PaginationButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: ReactNode;
}

export function PaginationButton({ children, ...rest }: PaginationButtonProps) {
	return (
		<button
			className="w-10 h-10 border border-none rounded-md bg-slate-100 text-xs font-medium flex
		items-center justify-center cursor-pointer transition-colors duration-150 hover:bg-slate-200
		disabled:bg-black disabled:text-white"
			{...rest}
		>
			{children}
		</button>
	);
}
