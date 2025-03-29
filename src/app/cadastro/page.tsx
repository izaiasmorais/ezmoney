import Image from "next/image";
import { SignUpForm } from "@/components/sign-up/sign-up-form";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Cadastro - EZMoney",
	description: "Crie sua conta no EZMoney",
	keywords: ["Cadastro", "EZMoney", "Finanças", "Controle Financeiro"],
};

export default function SignUp() {
	return (
		<div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted/10 p-6 md:p-10">
			<div className="flex flex-col items-center justify-center gap-6 w-[400px]">
				<a href="#" className="flex items-center gap-2 self-center font-medium">
					<Image
						src={"/ezmoney.svg"}
						alt="Logo do EZMoney"
						width={32}
						height={32}
					/>
					EZMoney
				</a>

				<SignUpForm />
			</div>
		</div>
	);
}
