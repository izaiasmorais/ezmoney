import { Flex, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  name: string;
  price: number;
  icon: ReactNode;
  invoices: number;
  color: string;
}

export function InvoiceBox({ icon, invoices, price, name, color }: Props) {
  return (
    <Flex
      gap="1.25rem"
      w="100%"
      align="center"
      justify="center"
      borderRight="1px dashed"
      borderColor="text.paragraphy"
      _last={{
        border: "none",
      }}
    >
      <Flex bg="back.card" p="1rem" borderRadius="50%">
        {icon}
      </Flex>

      <Flex direction="column" gap=".3rem">
        <Text fontWeight={600} fontSize="1.125rem">
          {name}
        </Text>

        <Text fontSize=".9rem" color="text.sidebar">
          <Text fontWeight={600} display="inline">
            {invoices}
          </Text>{" "}
          contas
        </Text>

        <Text fontWeight={700} color={color}>
          R$ {price}
        </Text>
      </Flex>
    </Flex>
  );
}
