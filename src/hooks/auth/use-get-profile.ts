import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { z } from "zod";
import type { HTTPErrorResponse, HTTPSuccessResponse } from "@/@types/http";
import { api } from "@/lib/axios";

export const getProfileResponseSchema = z.object({
	id: z.string(),
	name: z.string(),
	email: z.string(),
	avatarUrl: z.string().nullable(),
});

export type Profile = z.infer<typeof getProfileResponseSchema>;

type GetProfileResponse = HTTPSuccessResponse<Profile> | HTTPErrorResponse;

export async function getProfile(): Promise<GetProfileResponse> {
	try {
		const response = await api.get<HTTPSuccessResponse<Profile>>(
			"/auth/profile"
		);
		return response.data;
	} catch (error) {
		if (error instanceof AxiosError && error.response?.data) {
			return error.response.data;
		}
		return {
			success: false,
			errors: ["Erro desconhecido"],
			data: null,
		};
	}
}

export function useGetProfile() {
	const { data: result, isLoading: isLoadingGetProfile } = useQuery({
		queryKey: ["get-profile"],
		queryFn: getProfile,
	});

	return {
		profile: result?.success ? result.data : null,
		isLoading: isLoadingGetProfile,
	};
}
