import { Flex, useDisclosure } from "@chakra-ui/react";
import { Layout } from "../components/Globals/Layout";
import { useMoney } from "../contexts/MoneyContext";
import { InvoicesSummary } from "../components/Invoices/InvoicesSummary";
import { FilterTab } from "../components/Invoices/FilterTab";
import { InvoicesModal } from "../components/Invoices/InvoicesModal";
import { api } from "../lib/axios";
import { InvoicesProps } from "../@types/types";
import { useEffect } from "react";
import { InvoicesTop } from "../components/Invoices/InvoicesTop";
import { InvoicesTable } from "../components/Invoices/InvoicesTable";

interface Props {
  data: InvoicesProps[];
}

export default function Invoices({ data }: Props) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { shadow, nextTheme, invoices, setInvoices } = useMoney();

  useEffect(() => {
    setInvoices(data);
  }, []);

  return (
    <Layout title="Contas" maxw={1200}>
      <InvoicesTop onOpen={onOpen} />

      <InvoicesSummary />

      <Flex
        direction="column"
        borderRadius="1rem"
        overflow="hidden"
        mt="2rem"
        pb="1rem"
        w="100%"
        bg={nextTheme.back.boxes}
        boxShadow={shadow}
      >
        <FilterTab />

        <InvoicesTable invoices={invoices} />
      </Flex>

      <InvoicesModal isOpen={isOpen} onClose={onClose} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const userId = process.env.NEXT_PUBLIC_USER_ID;

  try {
    const { data } = await api.get(`/clients/${userId}/invoices`);

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
