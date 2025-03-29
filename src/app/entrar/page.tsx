import Image from "next/image";
import { SignInForm } from "@/components/sign-in/sign-in-form";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Entrar - EZMoney",
	description: "Entre na sua conta do EZMoney",
	keywords: ["Entrar", "EZMoney", "Finanças", "Controle Financeiro"],
};

export default function SignIn() {
	return (
		<div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted/10 p-6 md:p-10">
			<div className="flex flex-col items-center justify-center gap-6 w-[400px]">
				<a href="#" className="flex items-center gap-2 self-center font-medium">
					<Image
						src={"/ezmoney.png"}
						alt="Logo do EZMoney"
						width={32}
						height={32}
						quality={100}
						priority
					/>
					EZMoney
				</a>

				<SignInForm />
			</div>
		</div>
	);
}
