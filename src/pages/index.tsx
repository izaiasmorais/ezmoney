import { SimpleGrid } from "@chakra-ui/react";
import { BudgetTable } from "../components/BudgetTable";
import { Layout } from "../components/Globals/Layout";
import { Summary } from "../components/Summary";
import { TransactionsTable } from "../components/Transactions/TransactionTable";
import { api } from "../lib/axios";
import { TransactionProps } from "../@types/types";
import { useMoney } from "../contexts/MoneyContext";
import { useEffect } from "react";
import { ViewAllTransactions } from "../components/Transactions/ViewAllTransactions";

interface HomeProps {
  data: TransactionProps[];
}

export default function Home({ data }: HomeProps) {
  const { transactions, setTransactions } = useMoney();

  const last5 = data.slice(-5);

  useEffect(() => {
    setTransactions(data);
  }, []);

  return (
    <Layout title="Dashboard">
      <Summary />

      <SimpleGrid
        gap="1.5rem"
        my="2rem"
        gridTemplateColumns={["1fr", "1fr", "1fr", "repeat(4, 1fr)"]}
      >
        <TransactionsTable data={last5} component={<ViewAllTransactions />} />
        <BudgetTable />
      </SimpleGrid>
    </Layout>
  );
}

export async function getServerSideProps() {
  const userId = process.env.NEXT_PUBLIC_USER_ID;

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
