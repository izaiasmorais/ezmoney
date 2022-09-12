import { SimpleGrid } from "@chakra-ui/react";
import type { NextPage } from "next";
import { BudgetTable } from "../components/BudgetTable";
import { Layout } from "../components/Layout";
import { Summary } from "../components/Summary";
import { TransactionsTable } from "../components/TransactionsTable";

const Home: NextPage = () => {
  return (
    <Layout title="Dashboard">
      <Summary />

      <SimpleGrid
        gap="1.5rem"
        my="2rem"
        gridTemplateColumns={["1fr", "1fr", "1fr", "repeat(4, 1fr)"]}
      >
        <TransactionsTable />
        <BudgetTable />
      </SimpleGrid>
    </Layout>
  );
};

export default Home;
