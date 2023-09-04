import { Button } from "./button";

export function ButtonGroup() {
	return (
		<div className="flex gap-0 items-center justify-center p-0">
			<Button>5</Button>
			<Button>10</Button>
			<Button>15</Button>
		</div>
	);
}
