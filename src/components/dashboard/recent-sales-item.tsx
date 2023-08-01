import { Avatar } from "./avatar";

export function RecentSalesItem() {
	return (
		<div className="flex justify-between mt-4">
			<div className="flex gap-2 items-center">
				<Avatar src="https://github.com/diego3g.png" fall="DF" />
				<div className="flex flex-col justify-start">
					<span className="font-medium">Diego Fernandes</span>
					<span className="text-sm text-slate-500">diego3g@rocketseat.com</span>
				</div>
			</div>
			<span className="font-semibold">+R$1,999.00</span>
		</div>
	);
}
