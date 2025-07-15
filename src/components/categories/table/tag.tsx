import { Badge } from "@/components/ui/badge";

interface CategoryTagProps {
	value: string;
	label: string;
}

export function CategoryTag({ value, label }: CategoryTagProps) {
	return (
		<Badge
			className="bg-dark-border text-muted-foreground py-1 px-4 rounded-full flex
		items-center gap-1"
		>
			{value}
			<span>{label}</span>
		</Badge>
	);
}
