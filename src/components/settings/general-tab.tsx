import { UploadCloud } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { GeneralTabForm } from "./general-tab-form";

export function GeneralTab() {
	return (
		<section
			id="settings-general-tab"
			className="flex flex-wrap md:flex-nowrap gap-4 md:gap-6"
		>
			<Card
				className="p-4 md:p-6 mt-4 md:mt-4 gap-4 md:gap-6 flex flex-col items-center justify-center
				w-full lg:max-w-[425px]"
			>
				<div
					className="w-48 h-48 border border-slate-100 border-dashed flex items-center
					justify-center rounded-full"
				>
					<div
						className="bg-slate-100 w-40 h-40 rounded-full flex flex-col items-center
					justify-center group"
					>
						<UploadCloud className="w-8 h-8 text-slate-300 hidden group-hover:block cursor-pointer" />
						<span className="text-sm text-slate-400 hidden group-hover:block cursor-pointer">
							Update photo
						</span>
					</div>
				</div>

				<span className="text-xs text-slate-400 font-medium text-center">
					Allowed *.jpeg, *.jpg, *.png, *.gif max size of 3.1 MB
				</span>

				<Button className="bg-red-100 text-red-700 hover:bg-red-300 font-semibold">
					Delete User
				</Button>
			</Card>

			<Card className="p-4 md:p-6 mt-4 md:mt-5 w-full">
				<GeneralTabForm />
			</Card>
		</section>
	);
}
