interface TrasanctionsBarChartLegendCardProps {
	color: string;
	title: string;
}

export function TrasanctionsBarChartLegendCard({
	color,
	title,
}: TrasanctionsBarChartLegendCardProps) {
	return (
		<div className="flex flex-col gap-2">
			<div className="flex items-center gap-2">
				<div
					className="w-4 h-4 rounded-full"
					style={{ backgroundColor: color }}
				/>

				<span className="text-sm">{title}</span>
			</div>
		</div>
	);
}
