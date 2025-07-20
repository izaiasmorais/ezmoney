"use client";
import { Bell, HelpCircle, LogOut, Settings, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuthStore } from "@/stores/auth";

export function Menu() {
	const router = useRouter();
	const logout = useAuthStore((state) => state.logout);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<div
					className="flex items-center gap-2 w-full p-2 cursor-pointer hover:bg-card
				rounded-md transition-colors"
				>
					<Avatar className="w-8 h-8 cursor-pointer">
						<AvatarFallback>IZ</AvatarFallback>
						<AvatarImage
							src="https://github.com/izaiasmorais.png"
							alt="Avatar do Usuário"
						/>
					</Avatar>

					<div className="flex flex-col text-xs max-w-[150px]">
						<strong>Izaías Lima</strong>
						<span className="text-muted-foreground truncate">
							izaiaslima356@gmail.com
						</span>
					</div>
				</div>
			</DropdownMenuTrigger>

			<DropdownMenuContent className="w-56" align="end">
				<DropdownMenuLabel>Minha Conta</DropdownMenuLabel>

				<DropdownMenuSeparator />

				<DropdownMenuGroup>
					<DropdownMenuItem>
						<User className="mr-2 h-4 w-4" />
						Meu Perfil
					</DropdownMenuItem>

					<DropdownMenuItem>
						<Settings className="mr-2 h-4 w-4" />
						Configurações
					</DropdownMenuItem>

					<DropdownMenuItem>
						<Bell className="mr-2 h-4 w-4" />
						Notificações
					</DropdownMenuItem>

					<DropdownMenuItem>
						<HelpCircle className="mr-2 h-4 w-4" />
						Suporte
					</DropdownMenuItem>
				</DropdownMenuGroup>

				<DropdownMenuSeparator />

				<DropdownMenuItem onClick={() => logout(() => router.push("/entrar"))}>
					<LogOut className="mr-2 h-4 w-4" />
					Sair
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
