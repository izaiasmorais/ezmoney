import { ProfileForm } from "@/components/settings/profile-form";
import { PasswordForm } from "@/components/settings/password-form";
import { DeleteAccountForm } from "@/components/settings/delete-account-form";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Configurações - EZMoney",
	description: "Configurações da sua conta EZMoney",
	keywords: ["Configurações", "EZMoney", "Finanças", "Controle Financeiro"],
};

export default function Settings() {
	return (
		<div className="container mx-auto p-6 space-y-10">
			<ProfileForm />

			<PasswordForm />

			<DeleteAccountForm />
		</div>
	);
}
