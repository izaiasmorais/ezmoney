import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { AiOutlineRight } from "react-icons/ai";
import { BudgetTable } from "../components/BudgetTable";
import { Layout } from "../components/Globals/Layout";
import { Summary } from "../components/Summary";
import { TransactionsTable } from "../components/TransactionsTable";
import Link from "next/link";
import { api } from "../lib/axios";
import { TransactionProps } from "../@types/types";

interface HomeProps {
  data: TransactionProps[];
}

export default function Home({ data }: HomeProps) {
  return (
    <Layout title="Dashboard">
      <Summary />

      <SimpleGrid
        gap="1.5rem"
        my="2rem"
        gridTemplateColumns={["1fr", "1fr", "1fr", "repeat(4, 1fr)"]}
      >
        <TransactionsTable
          data={data}
          viewAll={
            <Link href="/transactions">
              <Flex
                align="center"
                justify="flex-end"
                gap=".5rem"
                cursor="pointer"
                fontSize=".9rem"
                color="text.paragraphy"
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
  const response = await api.get(
    "/clients/a9744fad-ea57-4b72-a8fa-ba3950d402a1/transactions"
  );

  const data = response.data;

  return {
    props: {
      data,
    },
  };
}
