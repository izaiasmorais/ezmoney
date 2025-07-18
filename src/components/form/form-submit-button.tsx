import { Loader } from "lucide-react";
import { Button } from "../ui/button";

interface SubmitButtonProps {
	children: React.ReactNode;
	isLoading?: boolean;
	className?: string;
}

export function SubmitButton({
	children,
	isLoading,
	className,
}: SubmitButtonProps) {
	return (
		<Button type="submit" className={className}>
			{isLoading && <Loader className="animate-spin" />}
			{children}
		</Button>
	);
}
