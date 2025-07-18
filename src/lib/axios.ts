import axios from "axios";

export const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

api.interceptors.request.use(async (config) => {
	if (process.env.NEXT_PUBLIC_ACCESS_TOKEN) {
		config.headers.Authorization = `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`;
	}

	if (process.env.NEXT_PUBLIC_AXIOS_DELAY) {
		await new Promise((resolve) =>
			setTimeout(resolve, Number(process.env.NEXT_PUBLIC_AXIOS_DELAY))
		);
	}

	return config;
});
