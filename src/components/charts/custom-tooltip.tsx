export function CustomTooltip({
	active,
	payload,
	label,
}: {
	active?: boolean;
	payload?: any;
	label?: string;
}) {
	if (active && payload && payload.length) {
		return (
			<div className="bg-white dark:bg-slate-900 shadow-md rounded-md p-0 gap-0 overflow-hidden">
				<div className="w-full text-center flex items-center justify-center p-2 bg-slate-50 dark:bg-slate-700">
					<strong className="text-sm font-medium text-slate-400 dark:text-slate-300">
						{label}
					</strong>
				</div>

				<div className="w-full px-4 py-2">
					<span className="text-sm">
						<span className="text-slate-600 dark:text-slate-300">Earn:</span>{" "}
						<span className="font-medium">R$ {payload[0].value}</span>
					</span>
				</div>
			</div>
		);
	}
	return null;
}
