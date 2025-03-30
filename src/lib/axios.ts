import axios from "axios";
import Cookies from "js-cookie";

export const api = axios.create({
	headers: {
		"Content-Type": "application/json",
	},
});

api.interceptors.request.use(
	(config) => {
		const authCookie = Cookies.get("better-auth.session_token");

		if (authCookie) {
			config.headers.Cookie = `better-auth.session_token=${authCookie}`;
		}

		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

api.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response?.status === 401) {
			console.error("Sessão expirada ou inválida");
		}

		return Promise.reject(error);
	}
);
