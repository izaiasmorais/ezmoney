import { Flex } from "@chakra-ui/react";
import { FaClipboardList } from "react-icons/fa";
import { InvoiceBox } from "./InvoiceBox";

export function InvoicesSummary() {
  return (
    <Flex gap="1rem" mt="1rem" p="1rem" w="100%" minW="1100px">
      <InvoiceBox
        icon={<FaClipboardList size={25} color="#0077FF" />}
        color="blue.700"
        invoices={20}
        name="Total"
        price={2105}
      />
      <InvoiceBox
        icon={<FaClipboardList size={25} color="#00A86B" />}
        color="green.700"
        invoices={6}
        name="Pago"
        price={560}
      />
      <InvoiceBox
        icon={<FaClipboardList size={25} color="#FCAC12" />}
        color="yellow.700"
        invoices={4}
        name="Não pago"
        price={305}
      />
      <InvoiceBox
        icon={<FaClipboardList size={25} color="#FD3C4A" />}
        color="red.700"
        invoices={6}
        name="Atrasado"
        price={340}
      />
      <InvoiceBox
        icon={<FaClipboardList size={25} color="#7F3DFF" />}
        color="purple.700"
        invoices={4}
        name="Rascunho"
        price={695}
      />
    </Flex>
  );
}
