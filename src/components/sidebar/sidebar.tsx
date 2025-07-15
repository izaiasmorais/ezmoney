import { GeistMono } from "geist/font/mono";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Navbar } from "./navbar";
import { ThemeSwitcher } from "./theme-switcher";

export function Sidebar() {
	return (
		<aside className="h-full flex flex-col gap-6 p-4 border-r">
			<div className="flex items-center gap-2">
				<span className={GeistMono.className}>EZMoney</span>
			</div>

			<Navbar />

			<div className="mt-auto">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-2">
						<Avatar className="w-8 h-8">
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

					<ThemeSwitcher />
				</div>
			</div>
		</aside>
	);
}
