import { ReactNode } from "react";
import { Flex, Text } from "@chakra-ui/react";

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
  return (
    <Flex
      w="100%"
      h="max-content"
      py=".5rem"
      px={["0", "1rem", "1.5rem"]}
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
          <Text fontSize=".8rem" fontWeight="600" color="text.paragraphy">
            {description}
          </Text>
        </Flex>
      </Flex>

      <Flex direction="column" gap=".5rem" textAlign="right">
        <Text color={color} fontWeight="600">
          {type === "income" ? "R$" : "- R$"} {price}
        </Text>
        <Text color="text.paragraphy" fontWeight={600} fontSize=".9rem">{date}</Text>
      </Flex>
    </Flex>
  );
}
