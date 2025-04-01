"use client";

import Image from "next/image";

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex w-full min-h-screen">
			<div className="w-full md:w-1/2 md:p-12 flex items-center justify-center">
				<div className="flex flex-col items-center justify-center gap-6 w-[500px]">
					<span className="flex items-center gap-2 self-center font-medium">
						<Image
							src={"/ezmoney.png"}
							alt="Logo do EZMoney"
							width={32}
							height={32}
							quality={100}
							priority
						/>
						EZMoney
					</span>

					{children}
				</div>
			</div>

			<div className="hidden md:block md:w-1/2 bg-primary">
				<div className="flex flex-col h-full items-center justify-center p-12 text-white">
					<div className="max-w-lg flex flex-col gap-6">
						<h2 className="text-3xl font-bold">
							Gerencie suas finanças com facilidade!
						</h2>

						<p className="text-lg opacity-90">
							Simplifique o controle do seu dinheiro com o EZMoney. Visualize
							todas as suas transações, orçamentos e metas em um só lugar.
						</p>

						<div className="relative mt-4 overflow-hidden rounded-xl shadow-2xl">
							<Image
								src="https://i.imgur.com/RQVqVyH.png"
								alt="Dashboard preview"
								width={800}
								height={600}
								className="w-full h-auto"
							/>
						</div>

						<div className="flex justify-center gap-2 mt-6">
							<span className="h-2 w-2 rounded-full bg-white opacity-100"></span>
							<span className="h-2 w-2 rounded-full bg-white opacity-70"></span>
							<span className="h-2 w-2 rounded-full bg-white opacity-70"></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
