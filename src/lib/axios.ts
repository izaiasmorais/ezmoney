import axios from "axios";
import Cookies from "js-cookie";

export const api = axios.create({
	headers: {
		"Content-Type": "application/json",
	},
});

api.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response?.status === 401) {
			Cookies.remove("ezmoney:access_token");
			window.location.href = "/entrar";
		}

		return Promise.reject(error);
	}
);
