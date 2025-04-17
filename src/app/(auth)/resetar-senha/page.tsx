import { Metadata } from "next";
import { ResetPasswordForm } from "@/components/password/reset-password-form";

export const metadata: Metadata = {
	title: "EZMoney - Resetar Senha",
	description: "Recuperar senha da sua conta EZMoney",
	keywords: ["Recuperar Senha", "EZMoney", "Finanças", "Controle Financeiro"],
};

export default function ResetPassword() {
	return <ResetPasswordForm />;
}
