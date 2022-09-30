import { SimpleGrid, Text } from "@chakra-ui/react";
import { useMoney } from "../../contexts/MoneyContext";
import { StatusBox } from "./StatusBox";

interface Props {
  name: string;
  status: string;
  price: number;
  due: string;
}

export function InvoiceItem({ name, due, status, price }: Props) {
  const { nextTheme } = useMoney();

  const bgColor =
    status === "paid"
      ? "green.100"
      : status === "overdue"
      ? "red.100"
      : status === "unpaid"
      ? "yellow.100"
      : "purple.100";

  const textColor =
    status === "paid"
      ? "green.700"
      : status === "overdue"
      ? "red.700"
      : status === "unpaid"
      ? "yellow.700"
      : "purple.700";

  return (
    <SimpleGrid
      px="1.5rem"
      py="1rem"
      w="100%"
      minW="650px"
      color={nextTheme.text.paragraphy}
      fontWeight={600}
      alignItems="center"
      justifyContent="space-between"
      gridTemplateColumns={[
        "repeat(5, 1fr)",
        "repeat(5, 1fr)",
        "repeat(5, 1fr)",
        "repeat(8, 1fr)",
      ]}
    >
      <Text gridColumn={["1 / 3", "1 / 3", "1 / 3", "1 / 6"]} maxW={240}>
        {name}
      </Text>
      <Text gridColumn={["3 / 4", "3 / 4", "3 / 4", "6 / 7"]}>{due}</Text>
      <StatusBox
        grid={["4 / 5", "4 / 5", "4 / 5", "7 / 8"]}
        bgColor={bgColor}
        textColor={textColor}
      >
        {status}
      </StatusBox>
      <Text gridColumn={["5 / 6", "5 / 6", "5 / 6", "8 / 9"]}>R$ {price}</Text>
    </SimpleGrid>
  );
}
