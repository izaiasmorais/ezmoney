import { Flex, Text } from "@chakra-ui/react";

export function TotalBox() {
  return (
    <Flex
      bg="purple.700"
      color="white.50"
      borderRadius="1rem"
      direction="column"
      h="max-content !important"
      boxShadow="rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px"
      p="1rem"
      flex="1"
    >
      <Text>Account Balance</Text>
      <Text
        fontSize={["2rem", "2rem", "2rem", "2rem", "2.5rem", "2.5rem"]}
        fontWeight="500"
      >
        R$ 1300
      </Text>
    </Flex>
  );
}
