import { useMemo } from "react";
import { transactions } from "@/mocks/transactions";
import { formatToBRL } from "@/utils/format-to-brl";

interface MonthlySummary {
	[month: string]: {
		totalDeposits: number;
		totalExpenses: number;
		totalInvestments: number;
	};
}

interface TransactionsSummary {
	totalDeposits: number;
	totalExpenses: number;
	totalInvestments: number;
	expensesByCategory: {
		category: string;
		value: number;
		formattedValue: string;
	}[];
	monthlySummary: MonthlySummary;
}

export function useTransactions(
	selectedYear: number = new Date().getFullYear()
): TransactionsSummary {
	const {
		totalDeposits,
		totalExpenses,
		totalInvestments,
		expensesByCategory,
		monthlySummary,
	} = useMemo(() => {
		const currentDate = new Date();
		const currentYear = currentDate.getFullYear();
		const currentMonth = currentDate.getMonth();

		const months = [
			"january",
			"february",
			"march",
			"april",
			"may",
			"june",
			"july",
			"august",
			"september",
			"october",
			"november",
			"december",
		];

		const monthsToInclude =
			selectedYear === currentYear ? currentMonth + 1 : 12;

		const monthlySummary: MonthlySummary = {};
		for (let i = 0; i < monthsToInclude; i++) {
			monthlySummary[months[i]] = {
				totalDeposits: 0,
				totalExpenses: 0,
				totalInvestments: 0,
			};
		}

		const totals = transactions.reduce(
			(acc, transaction) => {
				const transactionDate = new Date(transaction.createdAt);
				const transactionYear = transactionDate.getFullYear();
				const transactionMonth = transactionDate.getMonth();

				if (transactionYear === selectedYear) {
					const monthName = months[transactionMonth];

					if (!acc.monthlySummary[monthName]) {
						acc.monthlySummary[monthName] = {
							totalDeposits: 0,
							totalExpenses: 0,
							totalInvestments: 0,
						};
					}

					if (transaction.type === "deposit") {
						acc.totalDeposits += transaction.value;
						acc.monthlySummary[monthName].totalDeposits += transaction.value;
					} else if (transaction.type === "expense") {
						acc.totalExpenses += transaction.value;
						acc.monthlySummary[monthName].totalExpenses += transaction.value;

						const categoryEntry = acc.expensesByCategory.find(
							(entry) => entry.category === transaction.category
						);
						if (categoryEntry) {
							categoryEntry.value += transaction.value;
						} else {
							acc.expensesByCategory.push({
								category: transaction.category,
								value: transaction.value,
								formattedValue: "",
							});
						}
					} else if (transaction.type === "investment") {
						acc.totalInvestments += transaction.value;
						acc.monthlySummary[monthName].totalInvestments += transaction.value;
					}
				}

				return acc;
			},
			{
				totalDeposits: 0,
				totalExpenses: 0,
				totalInvestments: 0,
				expensesByCategory: [] as {
					category: string;
					value: number;
					formattedValue: string;
				}[],
				monthlySummary,
			}
		);

		totals.expensesByCategory.forEach((entry) => {
			entry.formattedValue = formatToBRL(entry.value);
		});

		return totals;
	}, [selectedYear]);

	return {
		totalDeposits,
		totalExpenses,
		totalInvestments,
		expensesByCategory,
		monthlySummary,
	};
}
