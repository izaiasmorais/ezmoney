import { cn } from "@/lib/utils";

interface TableEmptyProps {
	message: string;
	description: string;
	className?: string;
}

export function TableEmpty({
	message,
	description,
	className,
}: TableEmptyProps) {
	return (
		<div
			className={cn(
				"flex flex-col items-center gap-4 mx-auto w-full text-center",
				className
			)}
		>
			<div
				className="w-[250px] h-[100px] rounded-xl dark:shadow-sm dark:bg-card mx-auto
								mt-8 flex items-center gap-4 p-4 border border-zinc-100 dark:border-border"
			>
				<div className="min-w-18 min-h-18 rounded-lg bg-zinc-200/50 dark:bg-muted/50" />

				<div className="w-full flex flex-col gap-2">
					<div className="h-3 w-full rounded-sm bg-zinc-200 dark:bg-muted" />
					<div className="h-3 w-full rounded-sm bg-zinc-200/50 dark:bg-muted" />
					<div className="h-3 w-1/2 rounded-sm bg-zinc-200/50 dark:bg-muted" />
				</div>
			</div>

			<div className="flex flex-col gap-2">
				<strong className="dark:text-zinc-300 text-zinc-500	!text-sm">
					{message}
				</strong>

				<p className="text-muted-foreground !text-sm">{description}</p>
			</div>
		</div>
	);
}
