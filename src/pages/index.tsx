import { Divider, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { AiOutlineRight } from "react-icons/ai";
import { BudgetTable } from "../components/BudgetTable";
import { Layout } from "../components/Globals/Layout";
import { Summary } from "../components/Summary";
import { TransactionsTable } from "../components/TransactionsTable";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Layout title="Dashboard">
      <Summary />

      <SimpleGrid
        gap="1.5rem"
        my="2rem"
        gridTemplateColumns={["1fr", "1fr", "1fr", "repeat(4, 1fr)"]}
      >
        <TransactionsTable
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
};

export default Home;
