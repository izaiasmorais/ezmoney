import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Merge, Rocket, Settings, Split } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { BellIcon } from "@radix-ui/react-icons";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import Link from "next/link";

export async function Notifications() {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					className="relative gap-1 rounded-sm h-10 px-2 text-secondary-foreground"
					size="sm"
				>
					<BellIcon className="h-5 w-5" />
					<span>3</span>

					<span className="absolute -right-0.5 -top-0.5 flex h-2 w-2">
						<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
						<span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
					</span>
				</Button>
			</PopoverTrigger>

			<PopoverContent align="end" alignOffset={-16} className="w-80 p-4">
				<div className="flex items-center justify-between">
					<span className="text-sm font-medium">Notifications</span>
					<Link
						className="text-muted-foreground hover:text-primary"
						href="/settings"
					>
						<Settings size={16} />
					</Link>
				</div>

				<Tabs defaultValue="new" className="mt-2">
					<TabsList className="space-x-1">
						<TabsTrigger value="new">New (3)</TabsTrigger>
						<TabsTrigger value="archived">Archived</TabsTrigger>
					</TabsList>
				</Tabs>

				<Separator className="my-4" />

				<div className="space-y-4">
					<div className="flex items-start gap-4">
						<div className="rounded-full border border-primary/10 bg-primary/5 p-2">
							<Split className="h-4 w-4 text-violet-400" />
						</div>
						<div className="space-y-1">
							<p className="text-xs leading-relaxed">
								New event <strong>pluto.subscription-created</strong> was
								created under <strong>pluto</strong> service by{" "}
								<strong>Diego Fernandes</strong>.
							</p>
							<time className="text-xs text-muted-foreground">
								15 minutes ago
							</time>
						</div>
					</div>

					<div className="flex items-start gap-4">
						<div className="rounded-full border border-primary/10 bg-primary/5 p-2">
							<Merge className="h-4 w-4 text-sky-400" />
						</div>
						<div className="space-y-1">
							<p className="text-xs leading-relaxed">
								New subscription on <strong>pluto.subscription-created</strong>{" "}
								was created under <strong>skylab</strong> service by{" "}
								<strong>Gabriel Buzzi</strong>.
							</p>
							<time className="text-xs text-muted-foreground">4 hours ago</time>
						</div>
					</div>

					<div className="flex items-start gap-4">
						<div className="rounded-full border border-primary/10 bg-primary/5 p-2">
							<Rocket className="h-4 w-4 text-amber-400" />
						</div>
						<div className="space-y-1">
							<p className="text-xs leading-relaxed">
								New version <strong>v1.0.1</strong> released on{" "}
								<strong>pluto.subscription-created</strong> event.
							</p>
							<time className="text-xs text-muted-foreground">6 hours ago</time>
						</div>
					</div>

					<Button variant="outline" className="w-full">
						Archive all
					</Button>
				</div>
			</PopoverContent>
		</Popover>
	);
}
