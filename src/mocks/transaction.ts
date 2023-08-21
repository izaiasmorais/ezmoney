import { faker } from "@faker-js/faker";
import { ITransaction } from "../@types/transaction";

function getRandomNumber() {
	const randomNumber = Math.floor(Math.random() * 12) + 1;
	return randomNumber;
}

const generateTransaction = (): ITransaction => ({
	id: faker.database.mongodbObjectId(),
	name: faker.finance.accountName(),
	createdAt: faker.date.past(),
	value: parseFloat(faker.finance.amount(100, 10000, 2)),
	installment: getRandomNumber(),
	category: faker.helpers.arrayElement([
		"food",
		"transport",
		"shopping",
		"invoice",
		"deposit",
	]),
	type: faker.helpers.arrayElement(["income", "expense"]),
});

const generateTransactions = (count: number): ITransaction[] => {
	const transactions: ITransaction[] = [];

	for (let i = 0; i < count; i++) {
		transactions.push(generateTransaction());
	}

	return transactions;
};

export const transactions: ITransaction[] = generateTransactions(5);
