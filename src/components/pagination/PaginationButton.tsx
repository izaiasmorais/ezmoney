import React, { ButtonHTMLAttributes, ReactNode } from "react";
import "./Pagination.scss";

interface PaginationButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: ReactNode;
}

export function PaginationButton({ children, ...rest }: PaginationButtonProps) {
	return (
		<button
			className="w-28 h-8 border border-none rounded-md bg-gray-300 text-xs font-medium flex
		items-center justify-center cursor-pointer transition-colors duration-150 hover:bg-gray-400
		disabled:bg-purple-700 disabled:text-white"
			{...rest}
		>
			{children}
		</button>
	);
}
