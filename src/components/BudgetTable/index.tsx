import { Flex } from "@chakra-ui/react";
import { BudgetBox } from "./BudgetBox";

export function BudgetTable() {
  return (
    <Flex
      gridColumn={["1", "1", "1", "4 / 5"]}
      direction={["column", "row", "row", "column"]}
      h="max-content"
      gap="1rem"
    >
      <BudgetBox total={500} spent={600} category="Transporte" />
      <BudgetBox total={1500} spent={1200} category="Shopping" />
    </Flex>
  );
}
