const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

const years = [2020, 2021, 2022, 2023];

// ======================================

const earnByMonth = [];

for (const month of months) {
	const randomValue = Math.floor(Math.random() * (3242 - 453 + 1)) + 453;
	earnByMonth.push({
		name: month,
		earn: randomValue,
	});
}

const earnByYear = [];

for (const year of years) {
	const randomValue = Math.floor(Math.random() * (3242 - 453 + 1)) + 453;
	earnByYear.push({
		name: year,
		earn: randomValue,
	});
}

const earnByDay = [];

for (let day = 1; day <= 31; day++) {
	const randomValue = Math.floor(Math.random() * (3242 - 453 + 1)) + 453;
	earnByDay.push({
		name: String(day),
		earn: randomValue,
	});
}

export const data = {
	earnByMonth,
	earnByYear,
	earnByDay,
};
