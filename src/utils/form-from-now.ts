import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
dayjs.locale("pt-br");

export function formatFromNow(date: string): {
	date: string;
	due: string;
} {
	const parsedDate = dayjs(date);

	return {
		date: parsedDate.format("DD MMMM YYYY"),
		due: parsedDate.fromNow(),
	};
}
