import { SignInForm } from "@/components/sign-in/sign-in-form";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Entrar - EZMoney",
	description: "Entre na sua conta do EZMoney",
	keywords: ["Entrar", "EZMoney", "Finanças", "Controle Financeiro"],
};

export default function SignIn() {
	return <SignInForm />;
}
