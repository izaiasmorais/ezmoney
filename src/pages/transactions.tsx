import { Flex, Select, useDisclosure } from "@chakra-ui/react";
import { Layout } from "../components/Globals/Layout";
import { AddButton } from "../components/Globals/AddButton";
import { TransactionsTable } from "../components/Transactions";
import { api } from "../lib/axios";
import { TransactionProps } from "../@types/types";
import { useMoney } from "../contexts/MoneyContext";
import { useEffect } from "react";
import { TransactionModal } from "../components/Transactions/TransactionModal";

interface TransacionsListProps {
  data: TransactionProps[];
}

export default function Transactions({ data }: TransacionsListProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { transactions, setTransactions } = useMoney();

  function handleFilter(type: string) {
    if (type === "") {
      setTransactions(data);
    } else if (type === "Entrada") {
      const filtered = data.filter((item) => item.type === "Entrada");
      setTransactions(filtered);
    } else if (type === "Saída") {
      const filtered = data.filter((item) => item.type !== "Entrada");
      setTransactions(filtered);
    } else {
      const filtered = data.filter((item) => item.type === type);
      setTransactions(filtered);
    }
  }

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
        <Select
          placeholder="Todos"
          maxWidth={160}
          onChange={(e) => handleFilter(e.target.value)}
        >
          <option value="Entrada">Entradas</option>
          <option value="Saída">Saídas</option>
          <option value="Compra">Compras</option>
          <option value="Conta">Contas</option>
          <option value="Transporte">Transporte</option>
          <option value="Comida">Comida</option>
        </Select>

        <Flex onClick={onOpen}>
          <AddButton name="Adicionar transação" />
        </Flex>
      </Flex>

      <TransactionsTable data={transactions} />

      <TransactionModal isOpen={isOpen} onClose={onClose} />
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
