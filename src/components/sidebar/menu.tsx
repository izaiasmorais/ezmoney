"use client";
import { Bell, HelpCircle, LogOut, MessageSquare, Settings, User } from "lucide-react";
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
import { useGetProfile } from "@/hooks/auth/use-get-profile";
import { useAuthStore } from "@/stores/auth";
import { MenuSkeleton } from "./menu-skeleton";

export function Menu() {
	const router = useRouter();
	const logout = useAuthStore((state) => state.logout);

	const { profile, isLoadingGetProfile } = useGetProfile();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				{isLoadingGetProfile && <MenuSkeleton />}

				{!isLoadingGetProfile && profile && (
					<div
						className="flex items-center gap-3 w-full p-2 cursor-pointer hover:bg-card
				rounded-xl transition-colors"
					>
						<Avatar className="w-9 h-9 cursor-pointer">
							<AvatarFallback>
								{profile.name.charAt(0)}
							</AvatarFallback>

							<AvatarImage
								src={profile.avatarUrl ?? ""}
								alt="Avatar do Usuário"
							/>
						</Avatar>

						<div className="flex flex-col gap-1 text-xs max-w-[150px] items-start">
							<strong>{profile.name}</strong>

							<span className="text-muted-foreground truncate max-w-[155px]">
								{profile.email}
							</span>
						</div>
					</div>
				)}
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

					<DropdownMenuItem>
						<MessageSquare className="mr-2 h-4 w-4" />
						Deixe uma sugestão
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
