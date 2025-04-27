import { QueryClient } from "@tanstack/react-query";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";

interface HandleDateChangeProps {
	selectedDate: DateRange | undefined;
	setDate: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
	queryClient: QueryClient;
	queryKey: string;
	getFuntion: (params: {
		startDate: string;
		endDate: string;
	}) => Promise<unknown>;
}

export async function handleDateChange({
	selectedDate,
	setDate,
	queryClient,
	queryKey,
	getFuntion,
}: HandleDateChangeProps) {
	setDate(selectedDate);

	if (!selectedDate || (!selectedDate.from && !selectedDate.to)) {
		await queryClient.invalidateQueries({ queryKey: [queryKey] });
		return;
	}

	const params: { startDate?: string; endDate?: string } = {};

	if (selectedDate.from) {
		params.startDate = format(selectedDate.from, "yyyy-MM-dd");
	}

	if (selectedDate.to) {
		params.endDate = format(selectedDate.to, "yyyy-MM-dd");
	}

	if (!params.startDate && !params.endDate) {
		await queryClient.invalidateQueries({ queryKey: [queryKey] });
		return;
	}

	if (!params.startDate) {
		params.startDate = params.endDate;
	}

	if (!params.endDate) {
		params.endDate = params.startDate;
	}

	const result = await getFuntion({
		startDate: params.startDate + "T00:00:00.000Z",
		endDate: params.endDate + "T23:59:59.999Z",
	});

	queryClient.setQueryData([queryKey], result);
}
