import { Bell, CreditCard, Lock, User } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SettingsContainer() {
	return (
		<Tabs defaultValue="tab-1" className="items-center">
			<TabsList className="text-foreground h-auto gap-2 rounded-none border-b bg-transparent px-0 py-1">
				<TabsTrigger
					value="tab-1"
					className="text-zinc-500 hover:bg-accent data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none text-base cursor-pointer"
				>
					<User />
					Perfil
				</TabsTrigger>

				<TabsTrigger
					value="tab-2"
					className="text-zinc-500 hover:bg-accent data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none text-base cursor-pointer"
				>
					<Bell />
					Notificações
				</TabsTrigger>

				<TabsTrigger
					value="tab-3"
					className="text-zinc-500 hover:bg-accent data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none text-base cursor-pointer"
				>
					<CreditCard />
					Plano
				</TabsTrigger>

				<TabsTrigger
					value="tab-4"
					className="text-zinc-500 hover:bg-accent data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none text-base cursor-pointer"
				>
					<Lock />
					Segurança
				</TabsTrigger>
			</TabsList>

			<TabsContent value="tab-1"></TabsContent>

			<TabsContent value="tab-2"></TabsContent>

			<TabsContent value="tab-3"></TabsContent>

			<TabsContent value="tab-4"></TabsContent>
		</Tabs>
	);
}
