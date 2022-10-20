import { Flex, Box, Image, Text } from "@chakra-ui/react";
import { useMoney } from "../../contexts/MoneyContext";

export function Presentation() {
  const { nextTheme } = useMoney();

  return (
    <Flex
      display={["none", "none", "flex"]}
      align="center"
      justify="center"
      direction="column"
      bg="#212B36"
      color="white"
      w="50%"
      h="100%"
      p="2rem"
    >
      <Box mx="auto" my="0" w="100%" maxW="350px">
        <Flex marginBottom="2.25rem">
          <Image src="/Logo.png" alt="Ezmoney logo" w="40px" h="40px" />
          <Text fontWeight={600} ml=".5rem" fontSize="1.5rem">
            EZMONEY
          </Text>
        </Flex>

        <Text fontSize="3rem" fontWeight={600} lineHeight="64px">
          Faça seu login no Dashboard.
        </Text>
      </Box>
    </Flex>
  );
}
