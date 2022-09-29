import { SimpleGrid, Text } from "@chakra-ui/react";
import { useMoney } from "../../contexts/MoneyContext";

export function InvoiceHeader() {
  const { nextTheme } = useMoney();

  return (
    <SimpleGrid
      px="1.5rem"
      py="1rem"
      w="100%"
      minW="650px"
      color={nextTheme.text.paragraphy}
      fontWeight={700}
      justifyContent="space-between"
      gridTemplateColumns={[
        "repeat(5, 1fr)",
        "repeat(5, 1fr)",
        "repeat(8, 1fr)",
      ]}
    >
      <Text gridColumn={["1 / 3", "1 / 3", "1 / 6"]}>Nome</Text>
      <Text gridColumn={["3 / 4", "3 / 4", "6 / 7"]}>Validade</Text>
      <Text gridColumn={["4 / 5", "4 / 5", "7 / 8"]}>Status</Text>
      <Text gridColumn={["5 / 6", "5 / 6", "8 / 9"]}>Valor</Text>
    </SimpleGrid>
  );
}
