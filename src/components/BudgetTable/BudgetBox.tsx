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

  return (
    <Flex
      boxShadow={shadow}
      borderRadius="1rem"
      direction="column"
      bg="back.boxes"
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
      <Text fontWeight="600" fontSize=".75rem" color="text.paragraphy">
        R$ {spent} de R$ {total}
      </Text>
    </Flex>
  );
}
