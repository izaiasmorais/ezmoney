import { Flex, Text } from "@chakra-ui/react";

export const boxShadow =
  "rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px";

export function TotalBox() {
  return (
    <Flex
      boxShadow={boxShadow}
      bg="purple.700"
      color="white.100"
      borderRadius="1rem"
      direction="column"
      h="max-content !important"
      p="1rem"
      flex="1"
    >
      <Text as="strong">Saldo da conta</Text>
      <Text
        fontSize={["2rem", "2rem", "2rem", "2rem", "2.5rem", "2.5rem"]}
        fontWeight="500"
      >
        R$ 1300
      </Text>
    </Flex>
  );
}
