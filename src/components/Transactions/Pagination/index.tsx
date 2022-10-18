import { Flex } from "@chakra-ui/react";
import { usePagination } from "../../../hooks/usePagination";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
  const { pages, setCurrentPage } = usePagination();

  return (
    <Flex direction="column">
      <Flex gap=".5rem" alignSelf="flex-end">
        {Array.from(Array(pages), (item, index) => (
          <PaginationItem
            key={index}
            page={index + 1}
            onClick={() => setCurrentPage(index)}
          />
        ))}
      </Flex>
    </Flex>
  );
}
