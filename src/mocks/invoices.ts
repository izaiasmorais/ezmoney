interface InvoiceType {
	id: string;
	name: string;
	createAt: string;
	dueDate: string;
	status: "pending" | "overdue" | "paid" | "postponed";
	parcels: number;
	value: number;
}

export const invoices: InvoiceType[] = [
	{
		id: "1",
		name: "Conta de luz",
		createAt: "10/02/2024",
		dueDate: "29/02/2024",
		status: "postponed",
		parcels: 1,
		value: 324.6,
	},
	{
		id: "2",
		name: "Internet Subscription",
		createAt: "02/01/2024",
		dueDate: "02/28/2024",
		status: "pending",
		parcels: 1,
		value: 89.99,
	},
	{
		id: "3",
		name: "Mobile Phone Bill",
		createAt: "01/15/2024",
		dueDate: "01/31/2024",
		status: "paid",
		parcels: 1,
		value: 55.75,
	},
	{
		id: "4",
		name: "Cable TV Subscription",
		createAt: "02/05/2024",
		dueDate: "02/28/2024",
		status: "overdue",
		parcels: 1,
		value: 99.99,
	},
	{
		id: "5",
		name: "Water Bill",
		createAt: "01/10/2024",
		dueDate: "01/31/2024",
		status: "overdue",
		parcels: 1,
		value: 45.25,
	},
	{
		id: "6",
		name: "Gas Bill",
		createAt: "01/20/2024",
		dueDate: "01/31/2024",
		status: "pending",
		parcels: 1,
		value: 65.8,
	},
	{
		id: "7",
		name: "Home Security Subscription",
		createAt: "02/01/2024",
		dueDate: "02/28/2024",
		status: "pending",
		parcels: 1,
		value: 120.0,
	},
	{
		id: "8",
		name: "Gym Membership",
		createAt: "01/01/2024",
		dueDate: "01/31/2024",
		status: "paid",
		parcels: 1,
		value: 75.0,
	},
	{
		id: "9",
		name: "Credit Card Bill",
		createAt: "01/25/2024",
		dueDate: "02/14/2024",
		status: "pending",
		parcels: 1,
		value: 350.0,
	},
	{
		id: "10",
		name: "Monthly Rent",
		createAt: "02/01/2024",
		dueDate: "02/28/2024",
		status: "pending",
		parcels: 1,
		value: 1500.0,
	},
];
