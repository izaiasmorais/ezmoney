import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { AiOutlineRight } from "react-icons/ai";
import { BudgetTable } from "../components/BudgetTable";
import { Layout } from "../components/Globals/Layout";
import { Summary } from "../components/Summary";
import { TransactionsTable } from "../components/TransactionsTable";
import Link from "next/link";
import { api } from "../lib/axios";
import { TransactionProps } from "../@types/types";
import { useMoney } from "../contexts/MoneyContext";
import { useEffect } from "react";

interface HomeProps {
  data: TransactionProps[];
}

export default function Home({ data }: HomeProps) {
  const { transactions, setTransactions, nextTheme } = useMoney();

  const filteredData =
    data.length > 5 ? data.slice(data.length - 6, data.length - 1) : data;

  useEffect(() => {
    setTransactions(filteredData);
  }, []);

  return (
    <Layout title="Dashboard">
      <Summary />

      <SimpleGrid
        gap="1.5rem"
        my="2rem"
        gridTemplateColumns={["1fr", "1fr", "1fr", "repeat(4, 1fr)"]}
      >
        <TransactionsTable
          data={transactions}
          viewAll={
            <Link href="/transactions">
              <Flex
                align="center"
                justify="flex-end"
                gap=".5rem"
                cursor="pointer"
                fontSize=".9rem"
                color={nextTheme.text.paragraphy}
              >
                <Text fontWeight={600}>Ver todas as transações</Text>
                <AiOutlineRight />
              </Flex>
            </Link>
          }
        />
        <BudgetTable />
      </SimpleGrid>
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
