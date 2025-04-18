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
		<div className="container mx-auto flex flex-col gap-6">
			<ProfileForm />

			<PasswordForm />

			<DeleteAccountForm />
		</div>
	);
}
