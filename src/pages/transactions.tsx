import { Flex, Select, useDisclosure } from "@chakra-ui/react";
import { Layout } from "../components/Globals/Layout";
import { AddButton } from "../components/Globals/AddButton";
import { TransactionsTable } from "../components/TransactionsTable";
import { api } from "../lib/axios";
import { TransactionProps } from "../@types/types";
import { MoneyModal } from "../components/Modal";
import { useMoney } from "../contexts/MoneyContext";
import { useEffect } from "react";

interface TransacionsListProps {
  data: TransactionProps[];
}

export default function Transactions({ data }: TransacionsListProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { transactions, setTransactions } = useMoney();

  useEffect(() => {
    setTransactions(data);
  }, []);

  return (
    <Layout title="Transações" maxw={1200}>
      <Flex
        w="100%"
        mt="1rem"
        mb="2rem"
        gap={["1rem", "1.5rem"]}
        align="center"
        justify="space-between"
      >
        <Select placeholder="Todos" maxWidth={160}>
          <option value="option1">Entradas</option>
          <option value="option1">Saídas</option>
          <option value="option2">Compras</option>
          <option value="option3">Salário</option>
          <option value="option3">Contas</option>
          <option value="option3">Transporte</option>
          <option value="option3">Supermercado</option>
        </Select>

        <AddButton name="Adicionar transação" clickFunction={onOpen} />
      </Flex>

      <TransactionsTable data={transactions} />

      <MoneyModal isOpen={isOpen} onClose={onClose} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const userId = process.env.USER_ID;

  try {
    const { data } = await api.get(`/clients/${userId}/transactions`);

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    const data = "";
    console.log(error);

    return {
      props: {
        data,
      },
    };
  }
}
