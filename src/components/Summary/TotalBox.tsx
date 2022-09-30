import { Flex, Text } from "@chakra-ui/react";
import { useMoney } from "../../contexts/MoneyContext";

interface Props {
  total: number;
}

export function TotalBox({ total }: Props) {
  const { shadow } = useMoney();

  return (
    <Flex
      boxShadow={shadow}
      bg="purple.700"
      color="white.100"
      borderRadius="1rem"
      direction="column"
      h="max-content !important"
      p="1rem"
      flex="1"
    >
      <Text as="strong">Saldo total</Text>
      <Text
        fontSize={["2rem", "2rem", "2rem", "2rem", "2.5rem", "2.5rem"]}
        fontWeight="500"
      >
        R$ {total}
      </Text>
    </Flex>
  );
}
