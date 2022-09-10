import { Flex, Select, SimpleGrid, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { NewTransactionButton } from "../components/Summary/NewTransactionsButton";
import { TransactionsTable } from "../components/TransactionsTable";

export default function Transactions() {
  return (
    <Flex w="100vw" h="100vh" bg="dark.500">
      <Sidebar />
      <Flex
        w="100%"
        direction="column"
        borderRadius="1rem 0 0 0"
        p="1rem"
        bg="#fdfdfd"
      >
        <Flex direction="column" w="100%" margin="0 auto" maxW={1400}>
          <Header page="Transações" />

          <SimpleGrid
            w="100%"
            mt="1rem"
            mb="1rem"
            alignItems="center"
            gridTemplateColumns="repeat(4, 1fr)"
          >
            <Select placeholder="Todos" maxWidth={300} gridColumn="1 / 4">
              <option value="option1">Entradas</option>
              <option value="option1">Saídas</option>
              <option value="option2">Compras</option>
              <option value="option3">Salário</option>
              <option value="option3">Contas</option>
              <option value="option3">Transporte</option>
              <option value="option3">Supermercado</option>
            </Select>

            <NewTransactionButton />
          </SimpleGrid>

          <TransactionsTable />
        </Flex>
      </Flex>
    </Flex>
  );
}
