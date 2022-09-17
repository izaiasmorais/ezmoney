import { SimpleGrid, Text } from "@chakra-ui/react";

interface Props {
  name: string;
  due: string;
  status: string;
  price: number;
}

export function InvoiceItem({ name, due, status, price }: Props) {
  const bgColor =
    status === "Pago"
      ? "green.100"
      : status === "Atrasado"
      ? "red.100"
      : status === "Não pago"
      ? "yellow.100"
      : "purple.100";

  const textColor =
    status === "Pago"
      ? "green.700"
      : status === "Atrasado"
      ? "red.700"
      : status === "Não pago"
      ? "yellow.700"
      : "purple.700";

  return (
    <SimpleGrid
      px="1.5rem"
      py="1rem"
      w="100%"
      minW="650px"
      color="text.paragraphy"
      fontWeight={600}
      alignItems="center"
      justifyContent="space-between"
      gridTemplateColumns={[
        "repeat(5, 1fr)",
        "repeat(5, 1fr)",
        "repeat(8, 1fr)",
      ]}
    >
      <Text gridColumn={["1 / 3", "1 / 3", "1 / 6"]} maxW={240}>
        {name}
      </Text>
      <Text gridColumn={["3 / 4", "3 / 4", "6 / 7"]}>{due}</Text>
      <Text
        gridColumn={["4 / 5", "4 / 5", "7 / 8"]}
        bg={bgColor}
        w="max-content"
        py=".3rem"
        px=".5rem"
        color={textColor}
        fontWeight={700}
        borderRadius=".5rem"
        fontSize=".85rem"
      >
        {status}
      </Text>
      <Text gridColumn={["5 / 6", "5 / 6", "8 / 9"]}>R$ {price},00</Text>
    </SimpleGrid>
  );
}
