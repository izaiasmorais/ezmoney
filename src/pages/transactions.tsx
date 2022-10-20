import { useEffect } from "react";
import { api } from "../lib/axios";
import { useDisclosure } from "@chakra-ui/react";
import { Layout } from "../components/Globals/Layout";
import { TransactionsTable } from "../components/Transactions/TransactionTable";
import { TransactionProps } from "../@types/types";
import { useMoney } from "../contexts/MoneyContext";
import { TransactionModal } from "../components/Transactions/TransactionModal";
import { TransactionHeading } from "../components/Transactions/TransactionHeading";
import { Pagination } from "../components/Transactions/Pagination";
import { usePagination } from "../hooks/usePagination";

interface TransacionsListProps {
  data: TransactionProps[];
}

export default function Transactions({ data }: TransacionsListProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { setTransactions } = useMoney();
  const { currentItems } = usePagination();

  useEffect(() => {
    setTransactions(data);
  }, []);

  return (
    <Layout title="Transações" maxw={1200}>
      <TransactionHeading onOpen={onOpen} data={data} />

      <TransactionsTable data={currentItems} component={<Pagination />} />

      <TransactionModal isOpen={isOpen} onClose={onClose} />
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
