import { ReactNode } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { useMoney } from "../../../contexts/MoneyContext";

interface Props {
  icon: ReactNode;
  color: string;
  title: string;
  description: string;
  price: number;
  date: string;
  bg: string;
  type: "income" | "expanse";
}

export function Transaction({
  color,
  title,
  description,
  price,
  date,
  bg,
  icon,
  type,
}: Props) {
  const { nextTheme } = useMoney();

  return (
    <Flex w="100%" h="max-content" borderRadius="1rem" justify="space-between">
      <Flex gap="1rem">
        <Flex
          w="60px"
          h="60px"
          bg={bg}
          borderRadius="1rem"
          align="center"
          justify="center"
        >
          {icon}
        </Flex>
        <Flex direction="column" gap=".5rem">
          <Text fontWeight="600" fontSize="1rem">
            {title}
          </Text>
          <Text
            fontSize=".8rem"
            fontWeight="600"
            color={nextTheme.text.paragraphy}
          >
            {description}
          </Text>
        </Flex>
      </Flex>

      <Flex direction="column" gap=".5rem" textAlign="right">
        <Text color={color} fontWeight="600">
          {type === "income" ? "R$" : "- R$"} {price}
        </Text>
        <Text
          color={nextTheme.text.paragraphy}
          fontWeight={600}
          fontSize=".9rem"
        >
          {date}
        </Text>
      </Flex>
    </Flex>
  );
}
