import { ReactNode } from "react";
import { Flex, Text } from "@chakra-ui/react";

interface Props {
  icon: ReactNode;
  color: string;
  title: string;
  description: string;
  price: number;
  hour: string;
  bg: string;
  type: "income" | "expanse";
}

export function Transaction({
  color,
  title,
  description,
  price,
  hour,
  bg,
  icon,
  type,
}: Props) {
  return (
    <Flex
      bg="#fcfcfc"
      w="100%"
      h="max-content"
      py=".5rem"
      px="1.5rem"
      borderRadius="1rem"
      justify="space-between"
    >
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
          <Text fontSize=".8rem" fontWeight="600" color="blackAlpha.600">
            {description}
          </Text>
        </Flex>
      </Flex>

      <Flex direction="column" gap=".5rem" textAlign="right">
        <Text color={color} fontWeight="600">
          {type === "income" ? "R$" : "- R$"} {price}
        </Text>
        <Text>{hour}</Text>
      </Flex>
    </Flex>
  );
}
