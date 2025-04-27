import { api } from "@/lib/axios";
import { AxiosError } from "axios";

export async function exportTransactions() {
	try {
		const response = await api.get("/api/transactions/export", {
			responseType: "blob",
		});

		const url = window.URL.createObjectURL(new Blob([response.data]));

		const a = document.createElement("a");
		a.style.display = "none";
		a.href = url;

		const contentDisposition = response.headers["content-disposition"];
		const filename = contentDisposition
			? contentDisposition.split("filename=")[1].replace(/"/g, "")
			: `transactions_${new Date().toISOString().split("T")[0]}.csv`;

		a.download = filename;

		document.body.appendChild(a);
		a.click();

		window.URL.revokeObjectURL(url);
		document.body.removeChild(a);

		return response.data;
	} catch (error) {
		if (error instanceof AxiosError && error.response?.data) {
			return error.response.data;
		}
		return {
			success: false,
			error: "Erro desconhecido",
			data: null,
		};
	}
}
