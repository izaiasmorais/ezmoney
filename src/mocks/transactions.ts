import { v4 as uuidv4 } from "uuid";
import type { Transaction } from "@/@types/transactions";

function generateTransactions(count: number): Transaction[] {
	const transactionTitles = {
		expense: [
			{
				name: "Pagamento Conta de Luz",
				category: "Utilidades",
				valueRange: [150, 250],
			},
			{
				name: "Pagamento Conta de Água",
				category: "Utilidades",
				valueRange: [80, 120],
			},
			{
				name: "Assinatura Netflix",
				category: "Entretenimento",
				valueRange: [50, 70],
			},
			{
				name: "Assinatura Disney+",
				category: "Entretenimento",
				valueRange: [35, 50],
			},
			{
				name: "Internet Fibra",
				category: "Utilidades",
				valueRange: [100, 150],
			},
			{
				name: "Parcela Consórcio Carro",
				category: "Transporte",
				valueRange: [800, 950],
			},
			{
				name: "Pagamento Conta de Telefone",
				category: "Utilidades",
				valueRange: [70, 90],
			},
			{
				name: "Assinatura Spotify Premium",
				category: "Entretenimento",
				valueRange: [30, 40],
			},
			{ name: "Manutenção Jardim", category: "Casa", valueRange: [120, 180] },
			{ name: "Plano de Saúde", category: "Saúde", valueRange: [400, 500] },
			{
				name: "Compra Supermercado",
				category: "Alimentação",
				valueRange: [300, 450],
			},
			{
				name: "Aluguel Apartamento",
				category: "Moradia",
				valueRange: [1600, 2000],
			},
			{ name: "Academia Fitness", category: "Saúde", valueRange: [90, 110] },
			{ name: "Curso Online", category: "Educação", valueRange: [250, 350] },
			{
				name: "Seguro Carro",
				category: "Transporte",
				valueRange: [1000, 1400],
			},
			{ name: "Jantar Restaurante", category: "Lazer", valueRange: [70, 100] },
			{ name: "Compra Roupas", category: "Vestuário", valueRange: [200, 300] },
			{
				name: "Viagem Fim de Semana",
				category: "Lazer",
				valueRange: [400, 600],
			},
			{
				name: "Manutenção Carro",
				category: "Transporte",
				valueRange: [500, 700],
			},
			{ name: "Pagamento Dentista", category: "Saúde", valueRange: [250, 350] },
			{
				name: "Compra Material Escolar",
				category: "Educação",
				valueRange: [150, 200],
			},
			{
				name: "Presente Aniversário",
				category: "Outros",
				valueRange: [100, 150],
			},
			{ name: "Conserto Geladeira", category: "Casa", valueRange: [300, 400] },
			{
				name: "Assinatura Amazon Prime",
				category: "Entretenimento",
				valueRange: [15, 25],
			},
			{ name: "Compra Farmácia", category: "Saúde", valueRange: [70, 100] },
			{
				name: "Estacionamento Shopping",
				category: "Transporte",
				valueRange: [20, 30],
			},
			{ name: "IPTU", category: "Impostos", valueRange: [380, 450] },
			{
				name: "Saque Caixa Eletrônico",
				category: "Outros",
				valueRange: [150, 250],
			},
		],
		deposit: [
			{ name: "Salário Mensal", category: "Renda", valueRange: [3000, 4000] },
			{
				name: "Freelance Projeto",
				category: "Renda",
				valueRange: [1000, 1500],
			},
			{ name: "Reembolso Despesa", category: "Renda", valueRange: [100, 200] },
			{
				name: "Rendimento Investimento",
				category: "Renda",
				valueRange: [200, 300],
			},
			{ name: "Bônus Anual", category: "Renda", valueRange: [2500, 3000] },
			{ name: "Venda Item Usado", category: "Renda", valueRange: [300, 400] },
		],
		investment: [
			{
				name: "Investimento Tesouro Direto",
				category: "Investimentos",
				valueRange: [4500, 5500],
			},
			{
				name: "Compra Ações B3",
				category: "Investimentos",
				valueRange: [2800, 3200],
			},
			{
				name: "Fundo Imobiliário",
				category: "Investimentos",
				valueRange: [1800, 2200],
			},
			{
				name: "Investimento CDB",
				category: "Investimentos",
				valueRange: [3800, 4200],
			},
		],
	};

	const transactions: Transaction[] = [];

	for (let i = 0; i < count; i++) {
		// Randomly select transaction type
		const types = ["expense", "deposit", "investment"] as const;
		const typeIndex = Math.floor(Math.random() * 10);
		// Weight the distribution: 70% expense, 20% deposit, 10% investment
		const type = typeIndex < 7 ? types[0] : typeIndex < 9 ? types[1] : types[2];

		// Randomly select a transaction title based on the type
		const titlesForType = transactionTitles[type];
		const titleIndex = Math.floor(Math.random() * titlesForType.length);
		const selectedTitle = titlesForType[titleIndex];

		// Generate a random date between Jan 1, 2025 and Mar 31, 2025
		const startDate = new Date(2024, 0, 1).getTime(); // Jan 1, 2025
		const endDate = new Date(2025, 2, 31).getTime(); // Mar 31, 2025
		const randomDate = new Date(
			startDate + Math.random() * (endDate - startDate)
		);

		// Random time of day
		randomDate.setHours(Math.floor(Math.random() * 14) + 8); // Between 8am and 10pm
		randomDate.setMinutes(Math.floor(Math.random() * 60));
		randomDate.setSeconds(Math.floor(Math.random() * 60));

		// Generate random value within the range
		const minValue = selectedTitle.valueRange[0];
		const maxValue = selectedTitle.valueRange[1];
		const value = +(minValue + Math.random() * (maxValue - minValue)).toFixed(
			1
		);

		// Generate random installments based on type
		let installment = 1;
		if (type === "expense") {
			// For some expenses, we might have installments
			const needsInstallment = Math.random() < 0.2; // 20% chance
			if (needsInstallment) {
				installment = Math.floor(Math.random() * 11) + 2; // 2 to 12 installments
			}
		}

		transactions.push({
			id: uuidv4(),
			name: selectedTitle.name,
			createdAt: randomDate.toISOString(),
			value: value,
			category: selectedTitle.category,
			installment: installment,
			type: type,
		});
	}

	// Sort by date for better readability
	transactions.sort(
		(a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
	);

	return transactions;
}

const randomTransactions = generateTransactions(200);

export const transactions: Transaction[] = randomTransactions;
