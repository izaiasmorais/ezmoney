"use client";
import * as React from "react";
import Image from "next/image";

export function TeamSwitcher({}: {
	teams: {
		name: string;
		logo: React.ElementType;
		plan: string;
	}[];
}) {
	return (
		<div
			className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground
		flex gap-4 p-2"
		>
			<div className="min-w-6 min-h-6">
				<Image
					src={"/ezmoney.svg"}
					alt="Logo do EZMoney"
					width={32}
					height={32}
				/>
			</div>

			<div className="grid flex-1 text-left text-sm leading-tight">
				<span className="truncate font-semibold">Workspace</span>

				<span className="truncate text-xs">Ativo</span>
			</div>
		</div>
	);
}
