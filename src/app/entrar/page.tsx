import { SignInForm } from "@/components/sign-in/sign-in-form";
import Image from "next/image";

export default function SignIn() {
	return (
		<div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted/10 p-6 md:p-10">
			<div className="flex w-full max-w-sm flex-col gap-6">
				<a href="#" className="flex items-center gap-2 self-center font-medium">
					<Image
						src={"/ezmoney.svg"}
						alt="Logo do EZMoney"
						width={32}
						height={32}
					/>
					EZMoney
				</a>

				<SignInForm />
			</div>
		</div>
	);
}
