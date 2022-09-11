import { Flex, Select } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { SidebarDrawer } from "../components/Sidebar/Drawer";
import { AddButton } from "../components/Summary/AddButton";
import { TransactionsTable } from "../components/TransactionsTable";

export default function Transactions() {
  return (
    <Flex w="100vw" h="100vh" bg="dark.500">
      <SidebarDrawer />
      <Flex
        bg="#fdfdfd"
        direction="column"
        w="100%"
        p="1rem"
        borderRadius={["0", "0", "0", "1rem 0 0 0"]}
      >
        <Flex direction="column" w="100%" margin="0 auto" maxW={1400}>
          <Header page="Transações" />

          <Flex
            w="100%"
            mt="1rem"
            mb="2rem"
            gap="1.5rem"
            align="center"
            justify="space-between"
          >
            <Select placeholder="Todos" maxWidth={300}>
              <option value="option1">Entradas</option>
              <option value="option1">Saídas</option>
              <option value="option2">Compras</option>
              <option value="option3">Salário</option>
              <option value="option3">Contas</option>
              <option value="option3">Transporte</option>
              <option value="option3">Supermercado</option>
            </Select>

            <AddButton name="Adicionar transação" />
          </Flex>

          <TransactionsTable />
        </Flex>
      </Flex>
    </Flex>
  );
}
