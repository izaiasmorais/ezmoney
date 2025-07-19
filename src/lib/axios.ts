import axios from "axios";
import Cookies from "js-cookie";

export const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

api.interceptors.request.use(async (config) => {
	const accessToken = Cookies.get("ezmoney-access-token");

	if (accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`;
	}

	if (process.env.NEXT_PUBLIC_AXIOS_DELAY) {
		await new Promise((resolve) =>
			setTimeout(resolve, Number(process.env.NEXT_PUBLIC_AXIOS_DELAY))
		);
	}

	return config;
});
