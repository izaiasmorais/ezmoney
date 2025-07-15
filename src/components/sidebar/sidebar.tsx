import { GeistMono } from "geist/font/mono";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { SearchInput } from "../ui/search-input";
import { Navbar } from "./navbar";

export function Sidebar() {
	return (
		<aside className="h-full flex flex-col gap-6 p-4 border-r border-border">
			<div className="flex items-center gap-2">
				<span className={GeistMono.className}>EZMoney</span>
			</div>

			<SearchInput
				placeholder="Pesquisar..."
				className="bg-dark-card border-dark-border"
			/>

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
				</div>
			</div>
		</aside>
	);
}
