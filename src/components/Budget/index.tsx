import { Flex } from "@chakra-ui/react";
import { BudgetBox } from "./BudgetBox";

export function Budget() {
  return (
    <Flex gridColumn="4 / 5" direction="column" h="max-content" gap="1rem">
      <BudgetBox
        budget="R$400 de R$300"
        category="Transporte"
        overdue={true}
        remaining={100}
      />
      <BudgetBox
        budget="R$1200 de R$1500"
        category="Shopping"
        overdue={false}
        remaining={300}
      />
    </Flex>
  );
}
