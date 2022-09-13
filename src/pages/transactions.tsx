import { Flex, Select } from "@chakra-ui/react";
import { Layout } from "../components/Globals/Layout";
import { AddButton } from "../components/Globals/AddButton";
import { TransactionsTable } from "../components/TransactionsTable";

export default function Transactions() {
  return (
    <Layout title="Transações">
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
    </Layout>
  );
}
