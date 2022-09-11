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
        gap="1.5rem"
        my="2rem"
        gridTemplateColumns={["1fr", "1fr", "1fr", "repeat(4, 1fr)"]}
      >
        <TransactionsTable />
        <Budget />
      </SimpleGrid>
    </Flex>
  );
}
