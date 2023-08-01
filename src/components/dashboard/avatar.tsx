import {
	Avatar as AvatarRoot,
	AvatarImage,
	AvatarFallback,
} from "@radix-ui/react-avatar";

interface AvatarProps {
	src: string;
	fall: string;
}

export function Avatar({ fall, src }: AvatarProps) {
	return (
		<AvatarRoot
			className="w-10 h-10 bg-slate-50 overflow-hidden rounded-full
				flex items-center justify-center"
		>
			<AvatarImage src={src} />
			<AvatarFallback>{fall}</AvatarFallback>
		</AvatarRoot>
	);
}
