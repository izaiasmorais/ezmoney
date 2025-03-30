import { api } from "@/lib/axios";

interface GetSessionResponse {
	user: {
		name: string;
		email: string;
		id: string;
		image: string;
	};
}

export async function getSession(): Promise<GetSessionResponse | undefined> {
	try {
		const response = await api.get<GetSessionResponse>("/api/auth/get-session");

		return response.data;
	} catch (error) {
		console.log(error);
	}
}
