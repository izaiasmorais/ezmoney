import { v4 as uuidv4 } from "uuid";
import type { Transaction } from "@/@types/transactions";

export const transactions: Transaction[] = [
	// Janeiro
	{
		id: uuidv4(),
		name: "Salário Mensal",
		createdAt: "2025-01-05T08:30:00Z",
		value: 3500,
		category: "Renda",
		installment: 1,
		type: "deposit",
	},
	{
		id: uuidv4(),
		name: "Pagamento Conta de Luz",
		createdAt: "2025-01-08T12:15:00Z",
		value: 200,
		category: "Utilidades",
		installment: 1,
		type: "expense",
	},
	{
		id: uuidv4(),
		name: "Compra Supermercado",
		createdAt: "2025-01-10T15:45:00Z",
		value: 380,
		category: "Alimentação",
		installment: 1,
		type: "expense",
	},
	{
		id: uuidv4(),
		name: "Assinatura Netflix",
		createdAt: "2025-01-12T09:00:00Z",
		value: 60,
		category: "Entretenimento",
		installment: 1,
		type: "expense",
	},
	{
		id: uuidv4(),
		name: "Investimento CDB",
		createdAt: "2025-01-15T10:30:00Z",
		value: 4000,
		category: "Investimentos",
		installment: 1,
		type: "investment",
	},
	{
		id: uuidv4(),
		name: "Seguro Carro",
		createdAt: "2025-01-18T14:20:00Z",
		value: 1200,
		category: "Transporte",
		installment: 1,
		type: "expense",
	},
	{
		id: uuidv4(),
		name: "Aluguel Apartamento",
		createdAt: "2025-01-20T11:00:00Z",
		value: 1800,
		category: "Moradia",
		installment: 1,
		type: "expense",
	},
	{
		id: uuidv4(),
		name: "Curso Online",
		createdAt: "2025-01-25T16:10:00Z",
		value: 300,
		category: "Educação",
		installment: 1,
		type: "expense",
	},
	{
		id: uuidv4(),
		name: "Venda Item Usado",
		createdAt: "2025-01-28T18:00:00Z",
		value: 350,
		category: "Renda",
		installment: 1,
		type: "deposit",
	},
	{
		id: uuidv4(),
		name: "Manutenção Carro",
		createdAt: "2025-01-30T10:00:00Z",
		value: 600,
		category: "Transporte",
		installment: 1,
		type: "expense",
	},

	// Fevereiro
	{
		id: uuidv4(),
		name: "Salário Mensal",
		createdAt: "2025-02-05T08:30:00Z",
		value: 3600,
		category: "Renda",
		installment: 1,
		type: "deposit",
	},
	{
		id: uuidv4(),
		name: "Pagamento Conta de Água",
		createdAt: "2025-02-07T13:45:00Z",
		value: 100,
		category: "Utilidades",
		installment: 1,
		type: "expense",
	},
	{
		id: uuidv4(),
		name: "Compra Supermercado",
		createdAt: "2025-02-09T16:30:00Z",
		value: 400,
		category: "Alimentação",
		installment: 1,
		type: "expense",
	},
	{
		id: uuidv4(),
		name: "Investimento Tesouro Direto",
		createdAt: "2025-02-12T11:50:00Z",
		value: 5000,
		category: "Investimentos",
		installment: 1,
		type: "investment",
	},
	{
		id: uuidv4(),
		name: "Assinatura Disney+",
		createdAt: "2025-02-14T09:00:00Z",
		value: 40,
		category: "Entretenimento",
		installment: 1,
		type: "expense",
	},
	{
		id: uuidv4(),
		name: "Plano de Saúde",
		createdAt: "2025-02-17T12:00:00Z",
		value: 450,
		category: "Saúde",
		installment: 1,
		type: "expense",
	},
	{
		id: uuidv4(),
		name: "Freelance Projeto",
		createdAt: "2025-02-22T14:00:00Z",
		value: 1200,
		category: "Renda",
		installment: 1,
		type: "deposit",
	},
	{
		id: uuidv4(),
		name: "Compra Roupas",
		createdAt: "2025-02-24T16:30:00Z",
		value: 250,
		category: "Vestuário",
		installment: 1,
		type: "expense",
	},
	{
		id: uuidv4(),
		name: "Jantar Restaurante",
		createdAt: "2025-02-26T19:00:00Z",
		value: 90,
		category: "Lazer",
		installment: 1,
		type: "expense",
	},
	{
		id: uuidv4(),
		name: "Investimento Fundo Imobiliário",
		createdAt: "2025-02-28T10:30:00Z",
		value: 2000,
		category: "Investimentos",
		installment: 1,
		type: "investment",
	},

	// Março
	{
		id: uuidv4(),
		name: "Salário Mensal",
		createdAt: "2025-03-05T08:30:00Z",
		value: 3700,
		category: "Renda",
		installment: 1,
		type: "deposit",
	},
	{
		id: uuidv4(),
		name: "Pagamento Conta de Telefone",
		createdAt: "2025-03-08T12:30:00Z",
		value: 80,
		category: "Utilidades",
		installment: 1,
		type: "expense",
	},
	{
		id: uuidv4(),
		name: "Compra Supermercado",
		createdAt: "2025-03-10T15:00:00Z",
		value: 420,
		category: "Alimentação",
		installment: 1,
		type: "expense",
	},
	{
		id: uuidv4(),
		name: "Investimento Ações B3",
		createdAt: "2025-03-13T10:20:00Z",
		value: 3000,
		category: "Investimentos",
		installment: 1,
		type: "investment",
	},
	{
		id: uuidv4(),
		name: "Conserto Geladeira",
		createdAt: "2025-03-16T14:00:00Z",
		value: 350,
		category: "Casa",
		installment: 1,
		type: "expense",
	},
	{
		id: uuidv4(),
		name: "Assinatura Amazon Prime",
		createdAt: "2025-03-18T09:30:00Z",
		value: 20,
		category: "Entretenimento",
		installment: 1,
		type: "expense",
	},
	{
		id: uuidv4(),
		name: "Reembolso Despesa",
		createdAt: "2025-03-21T11:00:00Z",
		value: 150,
		category: "Renda",
		installment: 1,
		type: "deposit",
	},
	{
		id: uuidv4(),
		name: "IPTU",
		createdAt: "2025-03-25T13:30:00Z",
		value: 400,
		category: "Impostos",
		installment: 1,
		type: "expense",
	},
	{
		id: uuidv4(),
		name: "Viagem Fim de Semana",
		createdAt: "2025-03-28T17:00:00Z",
		value: 500,
		category: "Lazer",
		installment: 1,
		type: "expense",
	},
	{
		id: uuidv4(),
		name: "Investimento CDB",
		createdAt: "2025-03-30T10:30:00Z",
		value: 4200,
		category: "Investimentos",
		installment: 1,
		type: "investment",
	},
];
