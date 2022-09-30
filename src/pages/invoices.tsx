import { Flex, Text, useDisclosure } from "@chakra-ui/react";
import { Layout } from "../components/Globals/Layout";
import { AddButton } from "../components/Globals/AddButton";
import { useMoney } from "../contexts/MoneyContext";
import { InvoicesSummary } from "../components/Invoices/InvoicesSummary";
import { FilterTab } from "../components/Invoices/FilterTab";
import { InvoiceItem } from "../components/Invoices/InvoiceItem";
import { InvoiceHeader } from "../components/Invoices/InvoiceHeader";
import { InvoicesModal } from "../components/Modal/InvoicesModal";

export default function Invoices() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { shadow, nextTheme } = useMoney();

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

          <InvoiceItem
            name="Fatura da TV"
            due="12/10/2022"
            price={656}
            status="Não pago"
          />
          <InvoiceItem
            name="Empréstimo Banco do Brasil"
            due="01/11/2022"
            price={1200}
            status="Pago"
          />
        </Flex>
      </Flex>

      <InvoicesModal isOpen={isOpen} onClose={onClose} />
    </Layout>
  );
}
