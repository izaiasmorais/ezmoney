import { Flex, Text, Box } from "@chakra-ui/react";

interface Props {
  category: string;
  total: number;
  spent: number;
}

export function BudgetBox({ total, spent, category }: Props) {
  const overdue = total - spent > 0 ? false : true;

  return (
    <Flex
      boxShadow="rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px"
      borderRadius="1rem"
      direction="column"
      bg="white.50"
      h="max-content"
      p="1rem"
      w="100%"
      gap=".5rem"
    >
      <Text fontWeight="600" fontSize=".9rem">
        {category}
      </Text>
      <Text fontWeight="700" fontSize="1.25rem">
        Restante R$ {overdue ? "0" : total - spent}
      </Text>
      <Box
        bg={overdue ? "red.700" : "green.700"}
        h="10px"
        w="100%"
        borderRadius=".5rem"
      />
      <Text fontWeight="600" fontSize=".75rem" color="blackAlpha.600">
        R$ {spent} de R$ {total}
      </Text>
    </Flex>
  );
}
