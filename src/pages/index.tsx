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
            <>
              <Divider />

              <Link href="/transactions">
                <Flex
                  align="center"
                  justify="flex-end"
                  gap=".5rem"
                  cursor="pointer"
                >
                  <Text fontWeight={700}>Ver todas</Text>
                  <AiOutlineRight />
                </Flex>
              </Link>
            </>
          }
        />
        <BudgetTable />
      </SimpleGrid>
    </Layout>
  );
};

export default Home;
