import { faker } from "@faker-js/faker";
import { IInvoice } from "../@types/invoice";

function getRandomNumber() {
	const randomNumber = Math.floor(Math.random() * 12) + 1;
	return randomNumber;
}

const generateInvoice = (): IInvoice => ({
	id: faker.database.mongodbObjectId(),
	name: faker.finance.accountName(),
	createdAt: faker.date.past(),
	dueDate: faker.date.future(),
	value: parseFloat(faker.finance.amount(100, 10000, 2)),
	installments: getRandomNumber(),
	status: faker.helpers.arrayElement([
		"paid",
		"unpaid",
		"postponed",
		"overdue",
	]),
});

const generateInvoices = (count: number): IInvoice[] => {
	const invoices: IInvoice[] = [];

	for (let i = 0; i < count; i++) {
		invoices.push(generateInvoice());
	}

	return invoices;
};

export const invoices: IInvoice[] = generateInvoices(10);
