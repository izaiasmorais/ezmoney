import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Budget } from "../Budget";
import { Header } from "../Header";
import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";

export function HomeMenu() {
  return (
    <Flex direction="column" w="100%" margin="0 auto" maxW={1400}>
      <Header page="Dashboard" />
      <Summary />

      <SimpleGrid
        w="100%"
        mt="4rem"
        mb="1rem"
        gridTemplateColumns="repeat(4, 1fr)"
      >
        <Text fontSize="1.25rem" fontWeight="500" gridColumn="1 / 4">
          Transações recentes
        </Text>
        <Text fontSize="1.25rem" fontWeight="500">
          Orçamento
        </Text>
      </SimpleGrid>

      <SimpleGrid gridTemplateColumns="repeat(4, 1fr)">
        <TransactionsTable />
        <Budget />
      </SimpleGrid>
    </Flex>
  );
}
