import { Flex, Text, useDisclosure } from "@chakra-ui/react";
import { Layout } from "../components/Globals/Layout";
import { AddButton } from "../components/Globals/AddButton";
import { useMoney } from "../contexts/MoneyContext";
import { InvoicesSummary } from "../components/Invoices/InvoicesSummary";
import { FilterTab } from "../components/Invoices/FilterTab";
import { InvoiceItem } from "../components/Invoices/InvoiceItem";
import { InvoiceHeader } from "../components/Invoices/InvoiceHeader";
import { InvoicesModal } from "../components/Invoices/InvoicesModal";
import { api } from "../lib/axios";
import { InvoicesProps } from "../@types/types";
import { format } from "date-fns";
import { useEffect } from "react";

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
      <Flex
        w="100%"
        mt="1rem"
        mb="1rem"
        gap="1.5rem"
        align="center"
        justify="space-between"
      >
        <Text fontSize="1.25rem" fontWeight={500}>
          Lista de contas
        </Text>

        <Flex onClick={onOpen}>
          <AddButton name="Adicionar conta" />
        </Flex>
      </Flex>

      <Flex
        overflowX="auto"
        borderRadius="1rem"
        bg={nextTheme.back.boxes}
        boxShadow={shadow}
      >
        <InvoicesSummary />
      </Flex>

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
        <Flex p=".5rem" overflowX="auto" bg={nextTheme.back.card}>
          <FilterTab />
        </Flex>

        <Flex direction="column" overflowX="auto">
          <InvoiceHeader />

          {invoices.map((item) => (
            <InvoiceItem
              key={item.id}
              name={item.title}
              due={format(new Date(item.dueDate), "dd/MM/yyyy")}
              price={item.price}
              status={item.status}
            />
          ))}
        </Flex>
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
