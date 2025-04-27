import { Button } from "@/components/ui/button";
import { File, LoaderCircle } from "lucide-react";

interface TableExportButtonProps {
	exportFuntion: () => void;
	isLoading: boolean;
}

export function TableExportButton({
	exportFuntion,
	isLoading,
}: TableExportButtonProps) {
	return (
		<Button
			variant="outline"
			className="max-w-max text-muted-foreground"
			onClick={exportFuntion}
			disabled={isLoading}
		>
			{isLoading && <LoaderCircle className="animate-spin" />}
			{!isLoading && <File />}
			Exportar CSV
		</Button>
	);
}
