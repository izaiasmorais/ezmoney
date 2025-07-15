import type { Metadata } from "next";
import { SignInForm } from "@/components/sign-in/sign-in-form";

export const metadata: Metadata = {
	title: "Entrar | EZMoney",
	description: "Entre na sua conta do EZMoney",
	keywords: ["Entrar", "EZMoney", "Finanças", "Controle Financeiro"],
};

export default function SignIn() {
	return <SignInForm />;
}
