import { Bell, CreditCard, Lock, User } from "lucide-react";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { SettingsTrigger } from "./trigger";

export default function SettingsContainer() {
	return (
		<Tabs defaultValue="tab-1" className="items-center">
			<TabsList
				className="text-foreground h-auto gap-2 rounded-none border-b bg-transparent
			px-0 py-1"
			>
				<SettingsTrigger value="tab-1" icon={<User />}>
					Perfil
				</SettingsTrigger>

				<SettingsTrigger value="tab-2" icon={<Bell />}>
					Notificações
				</SettingsTrigger>

				<SettingsTrigger value="tab-3" icon={<CreditCard />}>
					Plano
				</SettingsTrigger>

				<SettingsTrigger value="tab-4" icon={<Lock />}>
					Segurança
				</SettingsTrigger>
			</TabsList>

			<TabsContent
				value="tab-1"
				className="animate-in fade-in-50 slide-in-from-bottom-2 duration-300"
			></TabsContent>

			<TabsContent
				value="tab-2"
				className="animate-in fade-in-50 slide-in-from-bottom-2 duration-300"
			></TabsContent>

			<TabsContent
				value="tab-3"
				className="animate-in fade-in-50 slide-in-from-bottom-2 duration-300"
			></TabsContent>

			<TabsContent
				value="tab-4"
				className="animate-in fade-in-50 slide-in-from-bottom-2 duration-300"
			></TabsContent>
		</Tabs>
	);
}
