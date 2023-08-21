import { Avatar } from "../dashboard/avatar";

export function Notification() {
	return (
		<div className="flex justify-between gap-10 items-center cursor-pointer">
			<div className="flex gap-2">
				<Avatar src="" fall="IL" />

				<div className="flex flex-col justify-start gap-1">
					<p className="flex flex-wrap items-center text-sm gap-1 w-[230px]">
						<span className="font-semibold">@izaiaslima </span>
						started following you.
					</p>
					<span className="text-xs text-zinc-500">Today 14:12</span>
				</div>
			</div>

			<div className="flex flex-col gap-2 items-end w-[75px]">
				<div className="bg-blue-500 rounded-full w-2 h-2" />
				<span className="text-zinc-500 text-xs">2 hours ago.</span>
			</div>
		</div>
	);
}
