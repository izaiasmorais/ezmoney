import { Flex, Text } from "@chakra-ui/react";

export function TotalBox() {
  return (
    <Flex
      bg="purple.700"
      color="white.100"
      borderRadius="1rem"
      direction="column"
      h="max-content !important"
      p="1.5rem"
      flex="1"
    >
      <Text>Account Balance</Text>
      <Text fontSize="2.5rem" fontWeight="500">
        R$ 1300
      </Text>
    </Flex>
  );
}
