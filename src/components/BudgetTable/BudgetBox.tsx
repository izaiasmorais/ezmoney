import { Flex, Text, Box } from "@chakra-ui/react";
import { useShadow } from "../../contexts/ShadowContext";

interface Props {
  category: string;
  total: number;
  spent: number;
}

export function BudgetBox({ total, spent, category }: Props) {
  const overdue = total - spent > 0 ? false : true;
  const { shadow } = useShadow();

  const percentual = (spent / total) * 100;

  const width = percentual > 100 ? "100%" : percentual + "%";

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
      <Flex
        justify="space-between"
        mb=".5rem"
        fontSize="1.125rem"
        fontWeight={600}
      >
        <Text>{category}</Text>

        <Flex>
          <Text>R$ {total - spent}</Text>
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
        h="7px"
        w="100%"
        borderRadius=".5rem"
      >
        <Flex
          bg={overdue ? "red.700" : "green.700"}
          w={width}
          h="7px"
          borderRadius=".5rem"
        />
      </Box>
    </Flex>
  );
}
