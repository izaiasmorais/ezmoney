import type { Metadata } from "next";
import { SignUpForm } from "@/components/sign-up/sign-up-form";

export const metadata: Metadata = {
	title: "Cadastro | EZMoney",
	description: "Crie sua conta no EZMoney",
	keywords: ["Cadastro", "EZMoney", "Finanças", "Controle Financeiro"],
};

export default function SignUp() {
	return <SignUpForm />;
}
