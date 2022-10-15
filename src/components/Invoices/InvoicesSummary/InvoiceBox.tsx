import { Flex, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { useMoney } from "../../../contexts/MoneyContext";

interface Props {
  name: string;
  price: number;
  icon: ReactNode;
  invoices: number;
  color: string;
}

export function InvoiceBox({ icon, invoices, price, name, color }: Props) {
  const { nextTheme } = useMoney();

  return (
    <Flex
      gap="1.25rem"
      w="100%"
      align="center"
      justify="center"
      borderRight="1px dashed"
      borderColor={nextTheme.text.paragraphy}
      _last={{
        border: "none",
      }}
    >
      <Flex bg={nextTheme.back.card} p="1rem" borderRadius="50%">
        {icon}
      </Flex>

      <Flex direction="column" gap=".3rem">
        <Text fontWeight={600} fontSize="1.125rem">
          {name}
        </Text>

        <Flex fontSize=".9rem" gap=".3rem">
          <Text fontWeight={600}>{invoices}</Text>
          <Text color={nextTheme.text.sidebar}>contas</Text>
        </Flex>

        <Text fontWeight={700} color={color}>
          R$ {price}
        </Text>
      </Flex>
    </Flex>
  );
}
