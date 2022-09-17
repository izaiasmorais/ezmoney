import { Flex, Text, Box } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { useShadow } from "../../contexts/ShadowContext";

interface Props {
  category: string;
  total: number;
  spent: number;
}

export function BudgetBox({ total, spent, category }: Props) {
  const overdue = total - spent > 0 ? false : true;
  const { shadow } = useShadow();

  return (
    <Flex
      boxShadow={shadow}
      borderRadius="1rem"
      bg="back.boxes"
      h="max-content"
      p="1rem"
      direction="column"
      w="100%"
      gap=".5rem"
    >
      <Flex justify="space-between" mb=".5rem">
        <Flex direction="column">
          <Text fontWeight="600">{category}</Text>

          <Text fontSize=".8rem" color="text.paragraphy">
            Orçamento
          </Text>
        </Flex>

        <Flex>
          <Text fontSize="1.25rem" fontWeight={600}>
            R$ {total - spent}
          </Text>
        </Flex>
      </Flex>

      <Flex
        justify="space-between"
        align="center"
        color="text.paragraphy"
        fontWeight="600"
        fontSize=".8rem"
      >
        <Text>R$ {spent}</Text>
        <Text>R$ {total}</Text>
      </Flex>

      <Box
        bg={overdue ? "red.100" : "green.100"}
        h="6px"
        w="100%"
        borderRadius=".5rem"
      >
        <Flex
          bg={overdue ? "red.700" : "green.700"}
          h="6px"
          w="65%"
          borderRadius=".5rem"
        />
      </Box>
    </Flex>
  );
}
