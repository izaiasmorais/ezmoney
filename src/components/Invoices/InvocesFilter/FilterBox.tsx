import { Flex, Text } from "@chakra-ui/react";
import { useMoney } from "../../../contexts/MoneyContext";

interface Props {
  quantity: number;
  color: string;
  name: string;
  bg: string;
}

export function FilterBox({ color, name, bg, quantity }: Props) {
  const { nextTheme } = useMoney();

  return (
    <Flex mr={["1.5rem", "1.5rem", "3rem"]} gap=".3rem" fontWeight={600}>
      <Flex
        bg={bg}
        p=".3rem"
        w="1.5rem"
        h="1.5rem"
        align="center"
        borderRadius=".3rem"
        justify="center"
      >
        <Text color={color} fontSize=".85rem">
          {quantity}
        </Text>
      </Flex>
      <Text color={nextTheme.text.paragraphy}>{name}</Text>
    </Flex>
  );
}
