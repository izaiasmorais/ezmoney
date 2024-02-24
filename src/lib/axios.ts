import axios from "axios";

export const api = axios.create({
	baseURL: "https://63c94958320a0c4c95451970.mockapi.io",
});

if (process.env.ENABLE_API_DELAY) {
	api.interceptors.request.use(async (config) => {
		await new Promise((resolve) => setTimeout(resolve, 1000));

		return config;
	});
}
