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
      p="1.5rem"
      flex="1"
      gap="1.5rem"
    >
      <Text flex="1" as="strong">
        Saldo total
      </Text>
      <Text fontWeight="500" fontSize={["1.25rem", "1.25rem", "2rem"]}>
        R$ {total}
      </Text>
    </Flex>
  );
}
