import { Flex } from "@chakra-ui/react";

export function Budget() {
  return (
    <Flex
      gridColumn="4 / 5"
      bg="white.100"
      p="1rem"
      alignSelf="right"
      h="300px"
      borderRadius="1rem"
      boxShadow="rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px"
    >
      Budget
    </Flex>
  );
}
