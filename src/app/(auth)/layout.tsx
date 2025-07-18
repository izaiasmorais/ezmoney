import Image from "next/image";

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="w-full h-screen grid grid-cols-2">
			<div className="bg-dark-card flex flex-col items-center justify-center">
				<div className="w-full p-4">
					<Image src="/ezmoney.svg" alt="EZMoney Logo" width={40} height={40} />
				</div>

				<div className="w-full h-full flex flex-col items-center justify-center gap-4 text-center">
					<h1 className="font-semibold text-white text-3xl leading-tight">
						Gerencie suas finanças <br /> com facilidade
					</h1>

					<span className="text-muted-foreground">
						Gerencie suas contas à pagar, transações, orçamentos e muito mais.
					</span>
				</div>
			</div>

			<div className="flex items-center justify-center">{children}</div>
		</div>
	);
}
