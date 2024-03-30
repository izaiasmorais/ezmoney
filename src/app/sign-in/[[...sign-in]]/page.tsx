import { SignIn } from "@clerk/nextjs";

export default function Page() {
	return (
		<div className="grid w-full min-h-screen grid-cols-2">
			<div className="min-h-screen bg-neutral-900 flex items-center justify-center">
				<h1 className="text-5xl leading-tight font-extrabold text-white">
					Bem-vindo ao <br /> EZMoney
				</h1>
			</div>

			<div className="flex items-center justify-center">
				<SignIn />
			</div>
		</div>
	);
}
