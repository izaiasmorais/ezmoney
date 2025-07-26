import { BankAccount } from "@/hooks/bank-accounts/use-get-bank-accounts";
import { formatCurrency } from "@/utils/format-currency";
import { Ellipsis, Eye, EyeOff } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

interface CreditCardsProps {
	creditCards: BankAccount[];
}

export function CreditCards({ creditCards }: CreditCardsProps) {
	const [hiddenBalances, setHiddenBalances] = useState<Record<string, boolean>>(
		{}
	);

	const toggleBalanceVisibility = (cardId: string) => {
		setHiddenBalances((prev) => ({
			...prev,
			[cardId]: !prev[cardId],
		}));
	};

	const maskCardNumber = (lastFourDigits: string) => {
		return `**** **** **** ${lastFourDigits}`;
	};

	const formatExpirationDate = (dueDay: number) => {
		// Simulando uma data de vencimento baseada no dueDay
		const currentDate = new Date();
		const month = (dueDay % 12) + 1;
		const year = currentDate.getFullYear() + Math.floor(dueDay / 12);
		return `${month.toString().padStart(2, "0")}/${year.toString().slice(-2)}`;
	};

	const getCardBrand = (cardName: string) => {
		const name = cardName.toLowerCase();
		if (name.includes("visa")) return "visa";
		if (name.includes("mastercard") || name.includes("master"))
			return "mastercard";
		if (name.includes("amex") || name.includes("american")) return "amex";
		if (name.includes("elo")) return "elo";
		return "mastercard"; // default
	};

	const getCardBrandIcon = (brand: string) => {
		switch (brand) {
			case "visa":
				return (
					<div className="w-8 h-5 bg-blue-600 rounded flex items-center justify-center">
						<span className="text-white text-xs font-bold">VISA</span>
					</div>
				);
			case "mastercard":
				return (
					<div className="w-8 h-5 bg-gradient-to-r from-red-500 to-orange-500 rounded flex items-center justify-center">
						<div className="w-3 h-3 bg-white rounded-full mr-1"></div>
						<div className="w-3 h-3 bg-white rounded-full ml-1"></div>
					</div>
				);
			case "amex":
				return (
					<div className="w-8 h-5 bg-green-600 rounded flex items-center justify-center">
						<span className="text-white text-xs font-bold">AMEX</span>
					</div>
				);
			case "elo":
				return (
					<div className="w-8 h-5 bg-yellow-500 rounded flex items-center justify-center">
						<span className="text-white text-xs font-bold">ELO</span>
					</div>
				);
			default:
				return (
					<div className="w-8 h-5 bg-gradient-to-r from-red-500 to-orange-500 rounded flex items-center justify-center">
						<div className="w-3 h-3 bg-white rounded-full mr-1"></div>
						<div className="w-3 h-3 bg-white rounded-full ml-1"></div>
					</div>
				);
		}
	};

	return (
		<div className="flex flex-col gap-4">
			<div>
				<h1 className="text-lg">Cartões de Crédito</h1>
			</div>

			<div className="gap-4 grid grid-cols-3">
				{creditCards.map((creditCard, index) => {
					const isBalanceHidden = hiddenBalances[creditCard.id] ?? false;
					const cardBrand = getCardBrand("visa");
					const lastFourDigits = creditCard.id.slice(-4);
					const expirationDate = formatExpirationDate(creditCard.dueDay || 15);
					const cardHolderName = creditCard.name
						.split(" ")
						.slice(0, 2)
						.join(" ");

					return (
						<div
							key={creditCard.id}
							className="relative bg-card p-6 border border-border rounded-xl overflow-hidden"
						>
							{/* Background pattern */}
							<div className="absolute top-0 right-0 w-32 h-32 opacity-10">
								<div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-xl"></div>
							</div>

							{/* Header */}
							<div className="relative z-10 flex items-start justify-between mb-6">
								<div className="flex flex-col gap-1">
									<span className="text-slate-400 text-sm">Saldo atual</span>
									<div className="flex items-center gap-2">
										<strong className="text-2xl font-bold text-white">
											{isBalanceHidden
												? "••••••"
												: formatCurrency(creditCard.balance)}
										</strong>
										<Button
											variant="ghost"
											size="icon"
											className="h-6 w-6 text-slate-400 hover:text-white"
											onClick={() => toggleBalanceVisibility(creditCard.id)}
										>
											{isBalanceHidden ? (
												<Eye size={16} />
											) : (
												<EyeOff size={16} />
											)}
										</Button>
									</div>
								</div>

								<Button
									variant="ghost"
									size="icon"
									className="text-slate-400 hover:text-white"
								>
									<Ellipsis size={16} />
								</Button>
							</div>

							{/* Card Information */}
							<div className="relative z-10 space-y-4">
								{/* Card Number and Brand */}
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-3">
										{getCardBrandIcon(cardBrand)}
										<span className="text-white font-mono text-lg">
											{maskCardNumber(lastFourDigits)}
										</span>
									</div>
								</div>

								{/* Card Holder and Expiration */}
								<div className="flex items-end justify-between">
									<div className="flex flex-col gap-1">
										<span className="text-slate-400 text-sm">
											Titular do cartão
										</span>
										<span className="text-white font-medium">
											{cardHolderName}
										</span>
									</div>

									<div className="flex flex-col gap-1 items-end">
										<span className="text-slate-400 text-sm">
											Data de vencimento
										</span>
										<span className="text-white font-medium">
											{expirationDate}
										</span>
									</div>
								</div>
							</div>

							{/* Pagination dots */}
							<div className="absolute bottom-4 right-4 flex gap-1">
								{creditCards.map((_, dotIndex) => (
									<div
										key={dotIndex}
										className={`w-2 h-2 rounded-full ${
											dotIndex === index ? "bg-blue-500" : "bg-slate-600"
										}`}
									/>
								))}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
