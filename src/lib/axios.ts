import axios from "axios";

export const api = axios.create({
	baseURL: process.env.API_URL,
	withCredentials: true,
});

if (process.env.ENABLE_API_DELAY) {
	api.interceptors.request.use(async (config) => {
		await new Promise((resolve) => setTimeout(resolve, 1000));

		return config;
	});
}
