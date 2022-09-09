import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";

interface Props {
  name: string;
  value: string;
}

export function ResumeBox({ name, value }: Props) {
  return (
    <SimpleGrid
      bg="white.100"
      borderRadius="1rem"
      justifyContent="space-between"
      gap=".8rem"
      flex="1"
      p="1.5rem"
      gridTemplateColumns={["1fr", "1fr", "1fr", "1fr", "1fr", "3fr 1fr"]}
    >
      <Flex justify={["left", "left", "left", "left", "left", "right"]}>
        <Image src={`/assets/${name}.png`} alt="Entradas" w="48px" h="48px" />
      </Flex>
      <Box gridRow={["normal", "normal", "normal", "normal", "normal", "1"]}>
        <Text color="blackAlpha.700" mb="1rem">
          {name}
        </Text>
        <Text fontSize="2.5rem" fontWeight="500">
          R$ {value}
        </Text>
      </Box>
    </SimpleGrid>
  );
}
