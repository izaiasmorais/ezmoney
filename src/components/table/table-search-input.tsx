import { Table } from "@tanstack/react-table";
import { SearchInput } from "../ui/search-input";

interface TableSearchInputProps<T> {
	table: Table<T>;
	placeholder: string;
}

export function TableSearchInput<T>({
	table,
	placeholder,
}: TableSearchInputProps<T>) {
	return (
		<SearchInput
			className="w-full xl:w-[250px]"
			placeholder={placeholder}
			value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
			onChange={(event) =>
				table.getColumn("name")?.setFilterValue(event.target.value)
			}
		/>
	);
}
