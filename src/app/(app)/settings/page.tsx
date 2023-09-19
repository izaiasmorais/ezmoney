import { SettingsTabs } from "@/components/settings/settings-tabs";

export default function Settings() {
	return (
		<main className="flex flex-col gap-3">
			<div className="flex flex-wrap gap-2 justify-between items-center">
				<h1 className="text-2xl font-medium flex items-center gap-2">
					Settings
				</h1>

				<div></div>
			</div>

			<div className="flex flex-col gap-6">
				<SettingsTabs />
			</div>
		</main>
	);
}
